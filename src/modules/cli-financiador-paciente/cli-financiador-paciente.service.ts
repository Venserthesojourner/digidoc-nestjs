import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCliFinanciadorPacienteDto } from './dto/create-cli-financiador-paciente.dto';
import { UpdateCliFinanciadorPacienteDto } from './dto/update-cli-financiador-paciente.dto';
import { CliFinanciadorPaciente } from './entity/cli-financiador-paciente.entity';

@Injectable()
export class CliFinanciadorPacienteService {
  constructor(
    @Inject('CLI_FINANCIADOR_PACIENTE_REPOSITORY')
    private cliFinanciadorPaciente: Repository<CliFinanciadorPaciente>,
  ) {}

  async create(
    createCliFinanciadorPacienteDto: CreateCliFinanciadorPacienteDto,
  ) {
    const newObject = await this.cliFinanciadorPaciente.save(
      createCliFinanciadorPacienteDto,
    );
    return newObject;
  }

  async findAll() {
    const result = await this.cliFinanciadorPaciente.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.cliFinanciadorPaciente.findOneBy({
      id,
    });
    return result;
  }

  async update(
    id: number,
    updateCliFinanciadorPacienteDto: UpdateCliFinanciadorPacienteDto,
  ) {
    await this.cliFinanciadorPaciente.update(
      { id },
      updateCliFinanciadorPacienteDto,
    );
    const object = await this.cliFinanciadorPaciente.findOneBy({ id });
    return object;
  }

  remove(id: number) {
    return `This action removes a #${id} cliFinanciadorPaciente`;
  }
}
