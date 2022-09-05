import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  Query,
  Inject,
  forwardRef,
} from '@nestjs/common';

import { dateNow, nameFolderDate } from 'src/utils/date.util';
import { CliDocumentoDigitalizadoAdjuntoService } from '../cli-documento-digitalizado-adjunto/cli-documento-digitalizado-adjunto.service';
import { CreateCliDocumentoDigitalizadoAdjuntoDto } from '../cli-documento-digitalizado-adjunto/dto/create-cli-documento-digitalizado-adjunto.dto';
import { UpdateCliDocumentoDigitalizadoAdjuntoDto } from '../cli-documento-digitalizado-adjunto/dto/update-cli-documento-digitalizado-adjunto.dto';
import { CliDocumentoDigitalizadoAdjunto } from '../cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';

import { CliDocumentoDigitalizadoService } from './cli-documento-digitalizado.service';
import { CreateCliDocumentoDigitalizadoDto } from './dto/create-cli-documento-digitalizado.dto';
import { UpdateCliDocumentoDigitalizadoDto } from './dto/update-cli-documento-digitalizado.dto';

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

@Controller('cli-documento-digitalizado')
export class CliDocumentoDigitalizadoController {
  constructor(
    private readonly cliDocumentoDigitalizadoService: CliDocumentoDigitalizadoService,
    //@Inject(forwardRef(() => CliDocumentoDigitalizadoAdjunto))
    private readonly cliDocumentoDigitalizadoAdjuntoService: CliDocumentoDigitalizadoAdjuntoService,
  ) {}

  @Post()
  async create(
    @Body()
    payload: CreateCliDocumentoDigitalizadoDto,
  ) {
    if (!payload.fecha) {
      payload.fecha = new Date();
    }
    return this.cliDocumentoDigitalizadoService.create(payload);
  }

  @Get()
  findAll() {
    return this.cliDocumentoDigitalizadoService.findAll();
  }

  @Get('migrate/:limit')
  async migrateCliDocumentoDigitalizado(
    @Param('limit') limit: number,
    @Query('date') date: string,
  ) {
    let downloadDocument = 0;
    const startProcessMigration = process.hrtime();

    // Obtengo todos los documentos digitalizados
    const allCliDocumentoDigitalizado =
      await this.cliDocumentoDigitalizadoService.getAllCliDocumentoDigitalizado(
        limit,
        date,
      );

    // Obtengo todos los encounter
    const allEncounter =
      await this.cliDocumentoDigitalizadoService.getAllEncounter();

    // Obtengo los pacientes
    const allPatientTemp =
      await this.cliDocumentoDigitalizadoService.getAllPatient();
    const allPatient = allPatientTemp.patients;

    // Recorro los documentos digitalizados
    const cantCliCliDocumentoDigitalizado = allCliDocumentoDigitalizado.length;
    for (let i = 0; i < cantCliCliDocumentoDigitalizado; i++) {
      const cliDocumentoDigitalizado = allCliDocumentoDigitalizado[i];

      // Id mongo del document reference
      const idCliDocDigi = cliDocumentoDigitalizado.id;
      const encounter =
        this.cliDocumentoDigitalizadoService.findEncounterInArray(
          cliDocumentoDigitalizado,
          allEncounter,
        );
      let patient = this.cliDocumentoDigitalizadoService.findPatientInArray(
        cliDocumentoDigitalizado,
        allPatient,
      );

      // No tengo el paciente por lo tanto busco el paciente a partir del encounter
      if (!patient) {
        const id = encounter?.JSON_FHIR?.subject?.reference.split('/').pop();
        patient = this.cliDocumentoDigitalizadoService.findPatientInArrayForId(
          id,
          allPatient,
        );
      }

      if (patient) {
        const nameFile =
          cliDocumentoDigitalizado.JSON_FHIR.content[0].attachment.url
            .split('T')
            .pop();
        const sourceTmp = `${process.cwd()}/tmp/${nameFile}`;
        const startDownloadFile = process.hrtime();
        await this.cliDocumentoDigitalizadoService.findAndDownloadFile(
          idCliDocDigi,
          sourceTmp,
        );
        const stopDownloadFile = process.hrtime(startDownloadFile);
        downloadDocument +=
          (stopDownloadFile[0] * 1e9 + stopDownloadFile[1]) / 1e9;

        const tags = [];
        if (cliDocumentoDigitalizado?.JSON_FHIR?.meta) {
          const cantTags = cliDocumentoDigitalizado.JSON_FHIR.meta.length;
          for (let i = 0; i < cantTags; i++) {
            tags.push(cliDocumentoDigitalizado.JSON_FHIR.meta[i].tag);
          }
        }
        const payload: CreateCliDocumentoDigitalizadoDto = {
          fecha: cliDocumentoDigitalizado?.JSON_FHIR?.date ?? dateNow(),
          cliEpisodio: encounter?.JSON_FHIR?.identifier[0].value ?? null,
          cliPaciente: patient?.JSON_FHIR?.identifier[0].value,
          tags: tags.join(','),
          tipo: cliDocumentoDigitalizado?.JSON_FHIR?.type?.coding[0]?.system,
          descripcion: `DocumentReference ${idCliDocDigi}`,
        };

        const cliDoc = await this.cliDocumentoDigitalizadoService.create(
          payload,
        );

        const contentType =
          cliDocumentoDigitalizado.JSON_FHIR.content[0].attachment.contentType;
        const payloadAdj: CreateCliDocumentoDigitalizadoAdjuntoDto = {
          cliDocumentoDigitalizado: cliDoc,
          contentType,
          filename: sourceTmp,
        };

        const cliDocAdj =
          await this.cliDocumentoDigitalizadoAdjuntoService.create(payloadAdj);
        const nameFolder = nameFolderDate(
          cliDocumentoDigitalizado?.JSON_FHIR?.date ?? dateNow(),
        );
        const dirUpload = `/var/www/html/digidoc/${nameFolder}`;
        const name = `${cliDoc.id}-${cliDocAdj.id}`;
        const file: fileMulter = {
          mimetype: contentType,
          path: sourceTmp,
        };

        const responseFile =
          await this.cliDocumentoDigitalizadoAdjuntoService.saveFile(
            file,
            dirUpload,
            name,
          );

        const update: UpdateCliDocumentoDigitalizadoAdjuntoDto = {
          filename: responseFile?.filename,
          filenameThumbnail: responseFile?.filenameThumbnail,
          alto: responseFile?.alto,
          ancho: responseFile?.ancho,
          sha1: responseFile?.sha1,
          duracion: responseFile?.duracion,
        };

        await this.cliDocumentoDigitalizadoAdjuntoService.update(
          cliDocAdj.id,
          update,
        );
      }
    }

    const stopProcessMigration = process.hrtime(startProcessMigration);
    const processMigration =
      (stopProcessMigration[0] * 1e9 + stopProcessMigration[1]) / 1e9;

    const resutlProcessMigration = processMigration - downloadDocument;
    return {
      total: processMigration,
      resutlProcessMigration,
      downloadDocument,
    };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cliDocumentoDigitalizadoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateCliDocumentoDigitalizadoDto: UpdateCliDocumentoDigitalizadoDto,
  ) {
    return this.cliDocumentoDigitalizadoService.update(
      +id,
      updateCliDocumentoDigitalizadoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cliDocumentoDigitalizadoService.remove(+id);
  }
}
