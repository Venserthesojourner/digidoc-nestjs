import { Inject, Injectable } from '@nestjs/common';
//import { FindOptionsWhere, Repository } from 'typeorm';
import { AntecedentesVacunas } from './entity/vacunas.entity';

import { CreateVacunasDto } from './dto/create-vacunas.dto';

import { UpdateVacunasDto } from './dto/update-vacunas.dto';

import { Repository } from 'typeorm';

@Injectable()
export class AntecedentesVacunasService {
  fsBaseFhirServer: string;
  constructor(
    @Inject('ANTECEDENTES_VACUNAS_REPOSITORY')
    private antecedentesVacunasRepo: Repository<AntecedentesVacunas>,
  ) {}

  async create(
    createAntecedenteVacunaDto: CreateVacunasDto,
  ): Promise<AntecedentesVacunas> {
    return this.antecedentesVacunasRepo.save(createAntecedenteVacunaDto);
  }

  async getOne(id: number): Promise<AntecedentesVacunas> {
    return await this.antecedentesVacunasRepo.findOneBy({ id });
  }

  async getAll(): Promise<AntecedentesVacunas[]> {
    return this.antecedentesVacunasRepo.find();
  }

  async update(
    updateAntecedentesVacunasDto: UpdateVacunasDto,
  ): Promise<AntecedentesVacunas> {
    return this.antecedentesVacunasRepo.save(updateAntecedentesVacunasDto);
  }

  async delete() {
    //TODO:
  }
}
