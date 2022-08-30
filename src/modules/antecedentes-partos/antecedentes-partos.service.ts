import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAntecendentePartoDto } from './dto/create-antecedentes-parto.dto';
import { UpdateAntecedentePartoDto } from './dto/update-antecedentes-parto.dto';
import { antecedentesPartos } from './entity/partos.entity';

@Injectable()
export class AntecedentesPartosService {
  constructor(
    @InjectRepository(antecedentesPartos)
    private readonly antecedentePartosRepo: Repository<antecedentesPartos>,
  ) {}

  //Methods

  async createAntecedenteParto(
    nuevoAntecedentePartos: CreateAntecendentePartoDto,
  ) {
    return await this.antecedentePartosRepo.save(nuevoAntecedentePartos);
  }

  async findEachAntecedentesPartos(): Promise<antecedentesPartos[]> {
    return await this.antecedentePartosRepo.find();
  }

  async findSingleAntecedenteParto(id: number) {
    return await this.antecedentePartosRepo.findOneBy({ id: id });
  }

  async updateAntecedenteParto(
    id: number,
    datosActualizados: UpdateAntecedentePartoDto,
  ): Promise<antecedentesPartos> {
    return await this.antecedentePartosRepo.save(datosActualizados);
  }
}
