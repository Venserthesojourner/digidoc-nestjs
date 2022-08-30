import { Injectable } from '@nestjs/common';
import { antecedentesVacunas } from './entity/vacunas.entity';
import { CreateAntecedentesVacunasDto } from './dto/create-vacunas.dto';
import { UpdateAntecedenteVacunasDto } from './dto/update-vacunas.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AntecedentesVacunasService {
  constructor(
    @InjectRepository(antecedentesVacunas)
    private antecedentesVacunasRepo: Repository<antecedentesVacunas>,
  ) {}

  async createAntecedenteVacuna(
    createAntecedenteVacunaDto: CreateAntecedentesVacunasDto,
  ): Promise<antecedentesVacunas> {
    return this.antecedentesVacunasRepo.save(createAntecedenteVacunaDto);
  }

  async getOneAntecedenteVacuna(id: number): Promise<antecedentesVacunas> {
    return await this.antecedentesVacunasRepo.findOneBy({ id });
  }

  async getAllAntecedentesVacunas(): Promise<antecedentesVacunas[]> {
    return this.antecedentesVacunasRepo.find();
  }

  async updateAntecedenteVacuna(
    id: number,
    updateAntecedentesVacunasDto: UpdateAntecedenteVacunasDto,
  ): Promise<any> {
    return await this.antecedentesVacunasRepo.update(
      id,
      updateAntecedentesVacunasDto,
    );
  }

  async delete(id: number): Promise<any> {
    return await this.antecedentesVacunasRepo.softDelete(id);
  }
}
