import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCliFinanciadorDto } from './dto/create-cli-financiador.dto';
import { UpdateCliFinanciadorDto } from './dto/update-cli-financiador.dto';
import { CliFinanciador } from './entity/cli-financiador.entity';

@Injectable()
export class CliFinanciadorService {
  constructor(
    @Inject('CLI_FINANCIADOR_REPOSITORY')
    private cliFinanciador: Repository<CliFinanciador>,
  ) {}

  async create(createCliFinanciadorDto: CreateCliFinanciadorDto) {
    const newObject = await this.cliFinanciador.save(createCliFinanciadorDto);
    return newObject;
  }

  async findAll() {
    const result = await this.cliFinanciador.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.cliFinanciador.findOneBy({ id });
    return result;
  }

  async update(id: number, updateCliFinanciadorDto: UpdateCliFinanciadorDto) {
    await this.cliFinanciador.update({ id }, updateCliFinanciadorDto);
    const object = await this.cliFinanciador.findOneBy({ id });
    return object;
  }

  remove(id: number) {
    return `This action removes a #${id} cliFinanciador`;
  }
}
