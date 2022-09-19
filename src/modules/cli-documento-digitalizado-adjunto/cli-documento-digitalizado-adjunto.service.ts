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
        await this.manageFhirDocumentReferenceWithEncounter({
          i,
          dataStream,
          bundledOrganization,
        });
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
    const bundledPatient =
      this.pacienteService.parseToJSON4Fhir(patientToBundle);
    Logger.log(`Bundled Patient Archivo ${i}`, bundledPatient);

    const bundledFile = await this.parseToJSON4Fhir(dataStream[i]);
    Logger.log(`Bundled File Archivo ${i}`, bundledFile);

    const bundledFhir = await createBundle([bundledPatient, bundledFile]);
    Logger.log(`Bundled FHIR (patient+file) Archivo ${i}`, bundledFhir);

    try {
      const documentInsertion = await this.httpService.axiosRef.post(
        `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
        { Bundle: bundledFhir },
      );
      Logger.log(`response Archivo ${i}: `, documentInsertion.data);
    } catch (e) {
      // Aca genero un log del error pero mantengo la ejecucion con los siguientes
    }
  }

  private async manageFhirDocumentReferenceWithEncounter({
    i,
    dataStream,
    bundledOrganization,
  }: {
    i: number;
    dataStream: any;
    bundledOrganization: {
      resourceType: string;
      identifier: { system: string; value: string }[];
      active: boolean;
      name: string;
      address: {
        text: string;
        line: string[];
        postalCode: string;
        city: string;
        state: string;
        country: string;
      }[];
      telecom: { system: string; value: string }[];
      type: { coding: { system: string; code: string; display: string }[] }[];
    };
  }): Promise<void> {
    Logger.log(`Archivo ${i} del datastream: Tiene episodio`);
    //Obtenemos el Episodio
    const episodeToBundle = await this.episodeRepository.findOne({
      where: {
        id: dataStream[i].cliDocumentoDigitalizado.cliEpisodio.id,
      },
      relations: ['pacientData'],
    });
    // Lo transcrbimos al formato de un JSON de entrada
    const bundledEncounter =
      this.episodeService.parseToJSON4Fhir(episodeToBundle);
    // Obtenemos al paciente
    const patientToBundle = await this.pacienteRepository.findOne({
      where: { id: dataStream[i].cliDocumentoDigitalizado.cliPaciente.id },
    });

    //Lo transcribimos al formato de un JSON de entrada
    const bundledPatient =
      this.pacienteService.parseToJSON4Fhir(patientToBundle);

    //Creamos el Bundle del Encounter
    const bundledFhirByEncounter = await createBundle([
      bundledPatient,
      bundledEncounter,
    ]);

    Logger.log(
      `BundledPatient with Encounter Archivo ${i}`,
      bundledFhirByEncounter,
    );
    // Se agrega el FHIR de organization
    bundledFhirByEncounter.entry.push({ resource: bundledOrganization });

    Logger.log(`Bundled Organization of ${i}`, bundledFhirByEncounter);
    // Se postea en la base de datos de MongoDB
    const encounterInsertion = await this.httpService.axiosRef.post(
      `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateEncounter}`,
      { Bundle: bundledFhirByEncounter },
    );
    Logger.log(
      `Resultado de la primer insercion Archivo ${i}: `,
      encounterInsertion.data,
    );

    // Logger.log('bundledFhirEncounter', bundledFhirByEncounter);
    //Obtenemos el archivo adjunto
    const bundledFile = await this.parseToJSON4Fhir(dataStream[i]);

    Logger.log(`bundledFile: Archivo ${i}`, bundledFile);

    const bundledFhirByDocument = await createBundle([bundledFile]);

    // Logger.log('bundledFhir with FILE', bundledFhirByDocument);
    bundledFhirByDocument.entry.push({
      resource: encounterInsertion.data.encounter.object,
    });

    Logger.log('bundledFhir with ENCOUNTER', bundledFhirByDocument);

    try {
      const documentInsertion = await this.httpService.axiosRef.post(
        `${this.configEnd.fsBaseFhirServer}${this.configEnd.fsPostCreateDocumentReference}`,
        { Bundle: bundledFhirByDocument },
      );

      Logger.log(
        `Insercion del documento ${i}, ACA SALE DEL IF`,
        documentInsertion.data,
      );
    } catch (err) {
      //
    }
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

    const imageurl = `${this.configEnd.dirupload}${element.filename}`;
    //const base64encodedurl = Buffer.from(imageurl).toString('base64');
    const content: any[] = [
      // Toda la info obtenidad del archivo que sera cargado
      // R! 1..*
      {
        attachment: {
          contentType: element.contentType,
          language: 'es-AR',
          url: imageurl,
          size: element.bytes,
          creation: element.createdAt /*Arreglar bien aca*/,
          data: 'data:application/pdf;base64,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CjkgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDcgMCBSL1ZpZXdlclByZWZlcmVuY2VzPDwvTnVtQ29waWVzIDEvRHVwbGV4L1NpbXBsZXg+Pj4+CmVuZG9iagoxMCAwIG9iago8PC9Nb2REYXRlKEQ6MjAyMTA3MDcwNzUwMDktMDMnMDAnKS9DcmVhdG9yKEdlbmVYdXMgUERGIFJlcG9ydCBHZW5lcmF0b3IpL0NyZWF0aW9uRGF0ZShEOjIwMjEwNzA3MDc1MDA5LTAzJzAwJykvUHJvZHVjZXIoaVRleHQgMi4xLjcgYnkgMVQzWFQpL0F1dGhvcihHZW5lWHVzKT4+CmVuZG9iagp4cmVmCjAgMTEKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAyNDU3IDAwMDAwIG4gCjAwMDAwMDI1NTAgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMjIwIDAwMDAwIG4gCjAwMDAwMDA0MjUgMDAwMDAgbiAKMDAwMDAwMDYzMCAwMDAwMCBuIAowMDAwMDAyNjM4IDAwMDAwIG4gCjAwMDAwMDIyNDAgMDAwMDAgbiAKMDAwMDAwMjcwMSAwMDAwMCBuIAowMDAwMDAyNzk1IDAwMDAwIG4gCnRyYWlsZXIKPDwvSW5mbyAxMCAwIFIvSUQgWzw0Zjc2OGQxZDIwOGM4M2UyMDZkNzVkNjJjNjQ5NDc2Zj48MGI4NjgzYmQ2YmU3MmRmOTk0MDE3MzU0Nzc4MmU2ZDE+XS9Sb290IDkgMCBSL1NpemUgMTE+PgpzdGFydHhyZWYKMjk3MgolJUVPRgo=',
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
