import { Inject, Injectable, Logger } from '@nestjs/common';
import { Between, Repository } from 'typeorm';
import { CreateCliDocumentoDigitalizadoAdjuntoDto } from 'src/modules/cli-documento-digitalizado-adjunto/dto/create-cli-documento-digitalizado-adjunto.dto';
import { UpdateCliDocumentoDigitalizadoAdjuntoDto } from 'src/modules/cli-documento-digitalizado-adjunto/dto/update-cli-documento-digitalizado-adjunto.dto';
import { CliDocumentoDigitalizadoAdjunto } from 'src/modules/cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';
import sizeOf from 'image-size';
import * as fs from 'fs';
import * as crypto from 'crypto';
import { Bundle } from 'fhir-resources';

import {
  isImage,
  isVideo,
  isAudio,
  isApplication,
  isPdf,
} from 'src/utils/file/file.upload';

import {
  createThumbnail,
  copyFilePromise,
  createThumbnailPdf,
  createThumbnailVideo,
  createThumbnailAudio,
  durationAudio,
  durationVideo,
  dimensionVideo,
  mkdirPromise,
} from 'src/utils/file/image.file';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { dateNow, last24Hours } from 'src/utils/date.util';
import { episodio } from '../episodio/entity/episodio.entity';
import { episodioService } from '../episodio/episodio.service';
import { PacienteService } from '../paciente/paciente.service';
import { paciente } from '../paciente/entity/paciente.entity';

import { ConfigType } from '@nestjs/config';
import configEndpoint from 'src/config/endpoint.config';

interface fileMulter {
  fieldname?: string;
  originalname?: string;
  encoding?: string;
  mimetype: string;
  destination?: string;
  filename?: string;
  path: string;
  size?: number;
}

interface fileMeta {
  filename?: string;
  filenameThumbnail?: string;
  alto?: number;
  ancho?: number;
  sha1?: string;
  duracion?: number;
}

@Injectable()
export class CliDocumentoDigitalizadoAdjuntoService {
  constructor(
    @Inject('CLI_DOCUMENTO_DIGITALIZADO_ADJUNTO_REPOSITORY')
    private cliDocDigiAdjRepository: Repository<CliDocumentoDigitalizadoAdjunto>,
    @Inject('EPISODIO_REPOSITORY')
    private episodeRepository: Repository<episodio>,
    @Inject('PACIENTE_REPOSITORY')
    private pacienteRepository: Repository<paciente>,
    @Inject(configEndpoint.KEY)
    private configEnd: ConfigType<typeof configEndpoint>,
    private readonly httpService: HttpService,
    private readonly episodeService: episodioService,
    private readonly pacienteService: PacienteService,
  ) {
    //
  }
  async create(
    createCliDocumentoDigitalizadoAdjuntoDto: CreateCliDocumentoDigitalizadoAdjuntoDto,
    idPaciente?: number /* Opcional */,
    idEpisodio?: number /* Opcional */,
  ) {
    if (idPaciente) {
      const newPaciente = this.pacienteService.findOne(idPaciente);
      console.log(newPaciente);
    }
    if (idEpisodio) {
      const newEpisodio = this.episodeService.getOneEpisodio(idEpisodio);
      console.log(newEpisodio);
    }
    const newObject = await this.cliDocDigiAdjRepository.save(
      createCliDocumentoDigitalizadoAdjuntoDto,
    );
    newObject.estado;
    return newObject;
  }

  async findAll() {
    const result = await this.cliDocDigiAdjRepository.find({
      relations: [
        'cliDocumentoDigitalizado',
        'cliDocumentoDigitalizado.cliPaciente',
        'cliDocumentoDigitalizado.cliEpisodio',
      ],
    });
    return result;
  }

  async findOne(id: number) {
    const result = await this.cliDocDigiAdjRepository.findOne({
      where: { id: id },
      relations: [
        'cliDocumentoDigitalizado',
        'cliDocumentoDigitalizado.cliPaciente',
        'cliDocumentoDigitalizado.cliEpisodio',
      ],
    });
    return result;
  }

  async update(
    id: number,
    updateCliDocumentoDigitalizadoAdjuntoDto: UpdateCliDocumentoDigitalizadoAdjuntoDto,
  ) {
    await this.cliDocDigiAdjRepository.update(
      { id },
      updateCliDocumentoDigitalizadoAdjuntoDto,
    );
    const object = await this.cliDocDigiAdjRepository.findOneBy({ id });
    return object;
  }

  remove(id: number) {
    return `This action removes a #${id} cliDocumentoDigitalizadoAdjunto`;
  }

  async saveFile(file: fileMulter, output: string, name: string) {
    const ext = file.mimetype.split('/').pop();
    let response: fileMeta;
    const pathOutput = `${output}/${name}.${ext}`;
    const pathOutputThumbnail = `${output}/${name}-thumbnail.jpg`;
    // Creo la carpeta para guarda el archivo
    await mkdirPromise(output);
    await copyFilePromise(file.path, pathOutput, true);
    const fileFs = fs.readFileSync(pathOutput);
    const sha1 = crypto.createHash('sha1').update(fileFs).digest('hex');
    response = {
      filename: pathOutput,
      filenameThumbnail: pathOutputThumbnail,
      sha1,
    };
    if (isImage(file)) {
      await createThumbnail(pathOutput, pathOutputThumbnail, file.mimetype);
      const dimensions = sizeOf(pathOutput);
      response = {
        ...response,
        filenameThumbnail: pathOutputThumbnail,
        alto: dimensions.height,
        ancho: dimensions.width,
      };
    }
    if (isVideo(file)) {
      await createThumbnailVideo(pathOutput, pathOutputThumbnail);
      const duration = await durationVideo(pathOutput);
      const dimensiones = await dimensionVideo(pathOutput);
      response = {
        ...response,
        ancho: dimensiones.width,
        alto: dimensiones.height,
        duracion: Math.round(duration),
      };
    }
    if (isAudio(file)) {
      await createThumbnailAudio(pathOutput, pathOutputThumbnail);
      const duration = await durationAudio(pathOutput);

      response = {
        ...response,
        duracion: Math.round(duration),
      };
    }
    if (isApplication(file)) {
      if (isPdf(file)) {
        await createThumbnailPdf(pathOutput, pathOutputThumbnail);
      }
    }

    return response;
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async saveToFhir(): Promise<Bundle> {
    //TODO: Agregar funcion para migrar con diferentes paramentros y un la generacion de un archivo de Log de las migraciones ejecutadas.
    const date = dateNow();
    const dateTo = `${date.year}-${date.month}-${date.day} ${date.hour}:${date.minute}:${date.second}`;
    const yesterday = last24Hours(date);
    const dateFrom = `${yesterday.year}-${yesterday.month}-${yesterday.day} ${yesterday.hour}:${yesterday.minute}:${yesterday.second}`; //console.log(dateFrom);
    console.log(`FROM: ${dateFrom}`);
    console.log(`TO: ${dateTo}`);

    const dataStream = await this.cliDocDigiAdjRepository.find({
      where: {
        createdAt: Between(dateFrom, dateTo),
      },
      relations: [
        'cliDocumentoDigitalizado',
        'cliDocumentoDigitalizado.cliPaciente',
        'cliDocumentoDigitalizado.cliEpisodio',
      ],
    });

    dataStream.forEach(async (element) => {
      if (element.cliDocumentoDigitalizado.cliEpisodio != null) {
        console.log(`Tiene episodio`);
        //Obtenemos el Episodio
        const episodeToBundle = await this.episodeRepository.findOne({
          where: {
            id: element.cliDocumentoDigitalizado.cliEpisodio.id,
          },
          relations: ['pacientData'],
        });
        // Lo transcrbimos al formato de un JSON de entrada
        const bundledEncounter = await this.episodeService.parseToJSON4Fhir(
          episodeToBundle,
        );
        // Obtenemos al paciente
        const patientToBundle = await this.pacienteRepository.findOne({
          where: { id: element.cliDocumentoDigitalizado.cliPaciente.id },
        });

        //Lo transcribimos al formato de un JSON de entrada
        const bundledPatient = await this.pacienteService.parseToJSON4Fhir(
          patientToBundle,
        );
        //Creamos el Bundle del document reference
        await Bundle.createBundle('collection', [
          bundledEncounter,
          bundledPatient,
        ]);
        this.httpService.post(
          `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateEncounter}`,
          Bundle,
        );

        //Obtenemos el archivo adjunto
        const bundledFile = await this.parseToJSON4Fhir(element);
        await Bundle.createBundle('collection', [
          bundledEncounter,
          bundledFile,
        ]);
        Logger.log(JSON.stringify(Bundle));
        const encounterInsertion = await this.httpService.axiosRef.post(
          `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
          Bundle,
        );
        //Logger.log(encounterInsertion.data);
      } else {
        if (element.cliDocumentoDigitalizado.cliPaciente != null) {
          console.log(`No Tiene episodio`);

          // Obtenemos al paciente
          const patientToBundle = await this.pacienteRepository.findOne({
            where: { id: element.cliDocumentoDigitalizado.cliPaciente.id },
          });

          //Lo transcribimos al formato de un JSON de entrada
          const bundledPatient = await this.pacienteService.parseToJSON4Fhir(
            patientToBundle,
          );

          //Obtenemos el archivo adjunto
          const bundledFile = await this.parseToJSON4Fhir(element);
          await Bundle.createBundle('collection', [
            bundledPatient,
            bundledFile,
          ]);
          this.httpService.post(
            `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
            Bundle,
          );
        }
      }

      /* 
      console.log(element);
      Logger.log(JSON.parse(JSON.stringify(bundledElement)));
      Logger.log('we are moving all the data =D');
       */
    });

    /* return this.httpService.post(
      '/api/v1/fhir/resource/DocumentReference/create_document_reference',
      Bundle,
    ); */
  }

  async parseToJSON4Fhir(
    element: CliDocumentoDigitalizadoAdjunto,
  ): Promise<any> {
    const tipo = [
      {
        // 0..1
        url: 'http://snomed.info/sct',
        codigo: '772786005',
        mostrar: 'certificado médico (elemento de registro)',
      },
    ];
    /*  FORMATO DE CATEGORIAS:
          // 0..*
          {
            codigos: [
              {
                url: 'http://snomed.info/sct',
                codigo: '371529009',
                mostrar:
                  'informe de historia y examen físico (elemento de registro)',
              },
            ],
          },*/
    const categorias = element.cliDocumentoDigitalizado.categoria;
    //TAGS: Llegan como una cadena de texto, que separamos en partes
    const tags: string[] = element.cliDocumentoDigitalizado.tags.split(',');
    const content: any[] = [
      // R! 1..*
      {
        attachment: {
          contentType: element.contentType,
          language: 'es-AR',
          url: element.url,
          size: element.bytes,
          creation: element.createdAt /*Arreglar bien aca*/,
          data: element.sha1,
        },
      },
    ];
    const parsedFhir = {
      documentReference: {
        resourceType: 'DocumentReference',
        identificador: [
          {
            id: element.id,
          },
        ],
        estado: element.estado, // !R 1..1 current | superseded | entered-in-error
        tipo: {
          codigos: { tipo },
        },
        categorias: [categorias],
        fecha: element.cliDocumentoDigitalizado.fecha, // 0..1
        descripcion: element.cliDocumentoDigitalizado.descripcion,
        meta: tags,
        content: content,
      },
    };
    return parsedFhir;
    //JSON.parse(JSON.stringify());
  }
}
