import { Inject, Injectable, Logger } from '@nestjs/common';
import { Between, Repository } from 'typeorm';
import { CreateCliDocumentoDigitalizadoAdjuntoDto } from 'src/modules/cli-documento-digitalizado-adjunto/dto/create-cli-documento-digitalizado-adjunto.dto';
import { UpdateCliDocumentoDigitalizadoAdjuntoDto } from 'src/modules/cli-documento-digitalizado-adjunto/dto/update-cli-documento-digitalizado-adjunto.dto';
import { CliDocumentoDigitalizadoAdjunto } from 'src/modules/cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';
import sizeOf from 'image-size';
import * as fs from 'fs';
import * as crypto from 'crypto';

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
//import { Cron, CronExpression } from '@nestjs/schedule';
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

import { createBundle } from 'src/utils/fhir';
import { IsBase64 } from 'class-validator';
import { Cron, CronExpression } from '@nestjs/schedule';

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

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async saveToFhir(): Promise<void> {
    const bundledOrganization = {
      resourceType: 'Organization',
      identifier: [
        {
          system: 'https://cmic.grupocemico.com.ar',
          value: '1',
        },
        {
          system: 'https://federador.grupocemico.com.ar/dominio',
          value: '1',
        },
      ],
      active: true,
      name: 'CMIC',
      address: [
        {
          text: 'Santiago del Estero  280, (8300), Neuquen, Neuquén, Argentina',
          line: ['Santiago del Estero  280'],
          postalCode: '8300',
          city: 'Neuquen',
          state: 'Neuquén',
          country: 'Argentina',
        },
      ],
      telecom: [
        {
          system: 'phone',
          value: '(299) 430 3558',
        },
        {
          system: 'email',
          value: 'recepcion@cmic.com.ar',
        },
      ],
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/organization-type',
              code: 'prov',
              display: 'Healthcare Provider',
            },
          ],
        },
      ],
    };
    //TODO: Agregar funcion para migrar con diferentes paramentros y un la generacion de un archivo de Log de las migraciones ejecutadas.
    const [dataStream, dataStreamLength] = await this.createDatastream();    

    for (let i = 0; i < dataStreamLength; i++) {
      if (dataStream[i].cliDocumentoDigitalizado.cliEpisodio != null) {
        await this.manageFhirDocumentReferenceWithEncounter({ i, dataStream, bundledOrganization });
      } else {
        if (dataStream[i].cliDocumentoDigitalizado.cliPaciente != null) {
          await this.manageDocumentReferenceWithPatient(i, dataStream);
        }
      }
    }
    // ACA TERMINA EL FOR
  }

  private async manageDocumentReferenceWithPatient(i: number, dataStream: any) {
    Logger.log(`Archivo ${i} del datastream: NO Tiene episodio`);

    // Obtenemos al paciente
    const patientToBundle = await this.pacienteRepository.findOne({
      where: {
        id: dataStream[i].cliDocumentoDigitalizado.cliPaciente.id,
      },
    });

    //Lo transcribimos al formato de un JSON de entrada
    const bundledPatient = this.pacienteService.parseToJSON4Fhir(
      patientToBundle
    );
    Logger.log(`Bundled Patient Archivo ${i}`, bundledPatient);

    
    const bundledFile = this.parseToJSON4Fhir(dataStream[i]);
    Logger.log(`Bundled File Archivo ${i}`, bundledFile);
    const bundledFhir = await createBundle([bundledPatient, bundledFile]);
    Logger.log(`Bundled FHIR (patient+file) Archivo ${i}`, bundledFhir);
    try{
      const DocumentResponse = await this.httpService.axiosRef.post(
        `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
        { Bundle: bundledFhir }
      );
      Logger.log(`response Archivo ${i}: `, DocumentResponse.data);
    } catch (e){
      // Aca genero un log del error pero mantengo la ejecucion con los siguientes 
    }    
  }

  private async manageFhirDocumentReferenceWithEncounter(
    { i, dataStream, bundledOrganization }: 
    { i: number; dataStream: any; bundledOrganization: 
      { resourceType: string; identifier: { system: string; value: string; }[]; 
      active: boolean; name: string; address: { text: string; line: string[]; 
        postalCode: string; city: string; state: string; country: string; }[]; 
        telecom: { system: string; value: string; }[]; 
        type: { coding: { system: string; code: string; display: string; }[]; }[]; }; })
        : Promise<void> {
    Logger.log(`Archivo ${i} del datastream: Tiene episodio`);
    //Obtenemos el Episodio
    const episodeToBundle = await this.episodeRepository.findOne({
      where: {
        id: dataStream[i].cliDocumentoDigitalizado.cliEpisodio.id,
      },
      relations: ['pacientData'],
    });
    // Lo transcrbimos al formato de un JSON de entrada
    const bundledEncounter = this.episodeService.parseToJSON4Fhir(
      episodeToBundle
    );
    // Obtenemos al paciente
    const patientToBundle = await this.pacienteRepository.findOne({
      where: { id: dataStream[i].cliDocumentoDigitalizado.cliPaciente.id },
    });

    //Lo transcribimos al formato de un JSON de entrada
    const bundledPatient = this.pacienteService.parseToJSON4Fhir(
      patientToBundle
    );

    //Creamos el Bundle del Encounter
    const bundledFhirByEncounter = await createBundle([
      bundledPatient,
      bundledEncounter,
    ]);

    Logger.log(
      `BundledPatient with Encounter Archivo ${i}`,
      bundledFhirByEncounter
    );
    // Se agrega el FHIR de organization
    bundledFhirByEncounter.entry.push({ resource: bundledOrganization });

    Logger.log(`Bundled Organization of ${i}`, bundledFhirByEncounter);
    // Se postea en la base de datos de MongoDB
    const encounterInsertion = await this.httpService.axiosRef.post(
      `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateEncounter}`,
      { Bundle: bundledFhirByEncounter }
    );
    Logger.log(
      `Resultado de la primer insercion Archivo ${i}: `,
      encounterInsertion.data
    );

    // Logger.log('bundledFhirEncounter', bundledFhirByEncounter);
    //Obtenemos el archivo adjunto
    const bundledFile = await this.parseToJSON4Fhir(dataStream[i]);

    Logger.log(`bundledFile: Archivo ${i}`, bundledFile);

    const bundledFhirByDocument = await createBundle([bundledFile]);

    // Logger.log('bundledFhir with FILE', bundledFhirByDocument);
    bundledFhirByDocument.entry.push({ resource: bundledEncounter });

    Logger.log('bundledFhir with ENCOUNTER', bundledFhirByDocument);

    const documentInsertion = await this.httpService.axiosRef.post(
      `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
      { Bundle: bundledFhirByDocument }
    );

    Logger.log(
      `Insercion del documento ${i}, ACA SALE DEL IF`,
      documentInsertion.data
    );
  }

  private async createDatastream(): Promise<any[]> {
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
    Logger.log('Datastream:::', dataStream);
    return [dataStream, dataStream.length];
  }

  async parseToJSON4Fhir(
    element: CliDocumentoDigitalizadoAdjunto,
  ): Promise<any> {
    //TAGS: Llegan como una cadena de texto, que separamos en partes
    const tagsArray = (element: CliDocumentoDigitalizadoAdjunto) => {
      const splitName = element.cliDocumentoDigitalizado.tags.split(',');
      const data = [];
      for (const i in splitName) {
        data[i] = { tag: splitName[i] };
      }
      return data;
    };

    const content: any[] = [
      // Toda la info obtenidad del archivo que sera cargado
      // R! 1..*
      { 
        attachment: {
          contentType: element.contentType,
          language: 'es-AR',
          url: `${this.configEnd.dirupload}${element.filename}`,
          size: element.bytes,
          creation: element.createdAt /*Arreglar bien aca*/,
          data:"iVBORw0KGgoAAAANSUhEUgAAAI8AAAALCAMAAABxnC5vAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAzFBMVEUAAAAqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlcqKlf////nlZzuAAAAQnRSTlMAVKz8BKSosM5odiIBRNDLZkdYUFy0TMxkQcpi/UBGuWG1HO2VEyOgi+AYs7v36MRKCJjdejNIwzTAanMhfUICyWxA/F9gAAAAAWJLR0RDZ9ANYgAAAAlvRkZzAAAAAwAAAA0A6RC6LQAAAAl2cEFnAAAAogAAABoA8Sv3NwAAAW1JREFUOMu9lIlSwjAQhtcKtBGQepWKKFIVteKBR70F9/0fys3ZNNROR2fYmc6fZDfs1yY/gDzWwASiB6XhIUKd8HC9IttAbNLTAvCpzl+uRQwYbrRXydNhrNthm70Qtli4zOOB4F0dj9JWaYHmyZX33ca8Xo0ND59TTz4Xvd1ae02pT7IDUuV5NUSdOK9dFIx7JFEZTz/mveK+ek891jz23JNaVms03qfeg1ByaOU8gwN1h4ZxfAhwFDMcHVP/cYInpwWu/N1lj2Rc5NEcWkXeyVl7VP+mo86dPksmiOeg/VXFY86Hx8UlpldFHnlGRR5rTy2edHp9I3luoyit5omi6O7X+6PzDo+1pw7PjNZnkkf66f6BfE81LAgYtB+RBaMnkeBjRr40PGmWPdNvhFOqIdV5XWuvCe3Cy2vvDd8/pLo8k88hY1/zbLH4tnnkN9Y+KvGM7XfjK1tdf1k+K/WX4rH9RTx/iur/mP/ED1rWetWuoP74AAAAAElFTkSuQmCC",
        },
      },
    ];

    //El resultado devuelto es el JSON de entrada requerido para la libreria que genera el bundle
    
    const parsedFhir = {
      resourceType: 'DocumentReference',
      identificador: [
        {
          id: element.id,
        },
      ],
      estado: element.estado, // !R 1..1 current | superseded | entered-in-error
      tipo: {
        codigos: [
          {
            // 0..1
            url: 'http://snomed.info/sct',
            codigo: '772786005',
            mostrar: 'certificado médico (elemento de registro)',
          },
        ],
      },
      categorias: {
        codigos: [
          {
            url: 'http://snomed.info/sct',
            codigo: '371529009',
            mostrar:
              'informe de historia y examen físico (elemento de registro)',
          },
        ],
      },
      fecha: element.cliDocumentoDigitalizado.fecha, // 0..1
      descripcion: element.cliDocumentoDigitalizado.descripcion,
      meta: tagsArray(element),
      content: content,
    };
    return parsedFhir;
  }
}
