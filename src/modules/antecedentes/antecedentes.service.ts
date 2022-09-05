import { Inject, Injectable } from '@nestjs/common';
///import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { paciente } from '../paciente/entity/paciente.entity';
import { CreateAntecedenteDto } from './dto/create-antecedente.dto';
import { UpdateAntecedenteDto } from './dto/update-antecedente.dto';
import { antecedentes } from './entity/antecedentes.entity';

/* @InjectRepository(paciente)
   private pacienteRepository: Repository<paciente>, */

@Injectable()
export class AntecedentesService {
  constructor(
    @Inject('ANTECEDENTES_REPOSITORY')
    private AntecedenteRepository: Repository<antecedentes>,
  ) {}

  async create(createAntecedenteDto: CreateAntecedenteDto) {
    const newAntecedente = await this.AntecedenteRepository.save(
      createAntecedenteDto,
    );
    return newAntecedente;
  }

  async findAll() {
    const listaAntecedentes = await this.AntecedenteRepository.find();
    return listaAntecedentes;
  }

  async findOne(id: number) {
    const antecedenteBuscado = await this.AntecedenteRepository.findOneBy({
      id,
    });
    /* if (antecedenteBuscado.paciente !== null) {
      const pacienteFind = this.pacienteRepository.findOneBy({
        id: antecedenteBuscado.paciente,
      });
      antecedenteBuscado.paciente = CreatePacienteDto.pacienteFind;
    } */
    return antecedenteBuscado;
  }

  async update({
    id,
    updateAntecedenteDto,
  }: {
    id: number;
    updateAntecedenteDto: UpdateAntecedenteDto;
  }): Promise<antecedentes> {
    await this.AntecedenteRepository.update({ id }, updateAntecedenteDto);
    const antecedenteActualizado = await this.AntecedenteRepository.findOneBy({
      id,
    });
    return antecedenteActualizado;
  }

  remove(id: number) {
    return `This action removes a #${id} Antecedentes`;
  }
}
