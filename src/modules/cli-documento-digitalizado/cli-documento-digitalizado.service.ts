import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { CreateCliDocumentoDigitalizadoDto } from 'src/modules/cli-documento-digitalizado/dto/create-cli-documento-digitalizado.dto';
import { UpdateCliDocumentoDigitalizadoDto } from 'src/modules/cli-documento-digitalizado/dto/update-cli-documento-digitalizado.dto';
import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import { ConfigType } from '@nestjs/config';
import configEndpoint from 'src/config/endpoint.config';

@Injectable()
export class CliDocumentoDigitalizadoService {
  fsBaseFhirServer: string;
  constructor(
    @Inject(configEndpoint.KEY)
    private configEnd: ConfigType<typeof configEndpoint>,
    @Inject('CLI_DOCUMENTO_DIGITALIZADO_REPOSITORY')
    private cliDocDigiRepository: Repository<CliDocumentoDigitalizado>,
    private readonly httpService: HttpService,
  ) {
    this.fsBaseFhirServer = this.configEnd.fsBaseFhirServer;
  }

  async create(
    createCliDocumentoDigitalizadoDto: CreateCliDocumentoDigitalizadoDto,
  ) {
    const newObject = await this.cliDocDigiRepository.save(
      createCliDocumentoDigitalizadoDto,
    );
    return newObject;
  }

  async findAll() {
    const result = await this.cliDocDigiRepository.find({
      relations: ['cliPaciente', 'cliEpisodio'],
    });
    return result;
  }

  async findOne(id: number) {
    const result = await this.cliDocDigiRepository.findOne({
      where: { id: id },
      relations: ['cliPaciente', 'cliEpisodio'],
    });
    return result;
  }

  async update(
    id: number,
    updateCliDocumentoDigitalizadoDto: UpdateCliDocumentoDigitalizadoDto,
  ) {
    await this.cliDocDigiRepository.update(
      { id },
      updateCliDocumentoDigitalizadoDto,
    );
    const object = await this.cliDocDigiRepository.findOneBy({ id });
    return object;
  }

  remove(id: number) {
    return `This action removes a #${id} cliDocumentoDigitalizado`;
  }

  async getAllCliDocumentoDigitalizado(limit = 100, date = null) {
    let url = `${this.fsBaseFhirServer}${this.configEnd.fsGetDocumentReference}?limit=${limit}`;
    if (date) {
      url += `&date=${date}`;
    }
    const cliDocumentoDigitalizado = await this.httpService.axiosRef.get(url);
    return cliDocumentoDigitalizado?.data?.documentReference || [];
  }

  async getAllEncounter() {
    const encounter = await this.httpService.axiosRef.get(
      `${this.fsBaseFhirServer}${this.configEnd.fsGetEncounter}?limit=100000000000`,
    );
    return encounter.data;
  }

  async getAllPatient() {
    const patient = await this.httpService.axiosRef.get(
      `${this.fsBaseFhirServer}${this.configEnd.fsGetPatientFilter}`,
    );
    return patient.data;
  }

  findEncounterInArray(cliDocumentoDigitalizado, allEncounter) {
    if (cliDocumentoDigitalizado?.JSON_FHIR?.context?.encounter) {
      const idEncounter =
        cliDocumentoDigitalizado?.JSON_FHIR?.context?.encounter[0]?.reference
          .split('/')
          .pop();
      const encounter = allEncounter.find((e) => e.id === idEncounter);
      return encounter;
    }
  }

  findPatientInArray(cliDocumentoDigitalizado, allPatient) {
    let patient;
    if (cliDocumentoDigitalizado?.JSON_FHIR?.subject?.reference) {
      const idPatient = cliDocumentoDigitalizado?.JSON_FHIR?.subject.reference
        .split('/')
        .pop();

      patient = allPatient.find((e) => e.id === idPatient);
    }
    return patient;
  }

  async findAndDownloadFile(id: number, path: string) {
    const url = `${
      this.fsBaseFhirServer
    }${this.configEnd.fsGetBinaryDocumentReference.replace(
      ':id',
      id.toString(),
    )}`;
    const res = await this.httpService.axiosRef({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
    });
    await fs.promises.writeFile(path, res.data);
    return;
  }

  findPatientInArrayForId(id: number, allPatient: Array<{ id: number }>) {
    const patient = allPatient.find((e) => e.id === id);
    return patient;
  }
}
