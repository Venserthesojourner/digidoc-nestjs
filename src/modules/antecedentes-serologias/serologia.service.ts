import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAntecedentesSerologiasDto } from './dto/create-antecedentes-serologias.dto';
import { UpdateAntecedenteSerologiaDto } from './dto/update-antecedentes-serologia.dto';
import { antecedentesSerologias } from './entity/serologia.entity';

@Injectable()
export class AntecedentesSerologiaService {
  constructor(
    @InjectRepository(antecedentesSerologias)
    private readonly serologiaService: Repository<antecedentesSerologias>,
  ) {}

  async insertAntecedentesSerologia(
    antecedenteSerologia: CreateAntecedentesSerologiasDto,
  ): Promise<antecedentesSerologias> {
    const nuevoAntecedenteSerologia =
      this.serologiaService.create(antecedenteSerologia);
    return await this.serologiaService.save(nuevoAntecedenteSerologia);
  }
  async findOneAntecedenteSerologia(
    id: number,
  ): Promise<antecedentesSerologias> {
    return await this.serologiaService.findOneBy({ id: id });
  }
  async findEachAntecedentesSerologia(): Promise<antecedentesSerologias[]> {
    return await this.serologiaService.find();
  }
  async updateAntecedenteSerologia(
    id: number,
    updatedSerologia: UpdateAntecedenteSerologiaDto,
  ): Promise<antecedentesSerologias> {
    await this.serologiaService.update({ id: id }, updatedSerologia);
    return await this.serologiaService.findOneBy({ id: id });
  }
}

//
