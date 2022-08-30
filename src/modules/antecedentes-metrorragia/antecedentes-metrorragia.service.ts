import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { antecedentesMetrorragia } from './entity/metrorragia.entity';
import { CreateAntecedenteMetrorragiaDto } from './dto/create-antecedentes-metrorragia.dto';
import { UpdateAntecedentesMetrorragiaDto } from './dto/update-antecedentes-metrorragia.dto';

@Injectable()
export class AntecedentesMetrorragiaService {
  constructor(
    @Inject('ANTECEDENTES_METRORRAGIA_REPOSITORY')
    private antecedenteMetrorragiaRepository: Repository<antecedentesMetrorragia>,
  ) {
    //
  }
  async createAntecedentesMetrorragia(
    createAntecedenteMetrorragiaDto: CreateAntecedenteMetrorragiaDto,
  ): Promise<antecedentesMetrorragia> {
    const nuevoAntecedenteMetrorragia =
      await this.antecedenteMetrorragiaRepository.save(
        createAntecedenteMetrorragiaDto,
      );
    return nuevoAntecedenteMetrorragia;
  }
  async findAllAntecedentesMetrorragia(): Promise<antecedentesMetrorragia[]> {
    const listadoAntecedentesMetrorragia =
      await this.antecedenteMetrorragiaRepository.find();
    return listadoAntecedentesMetrorragia;
  }

  async findOneAntecedenteMetrorragia(
    id: number,
  ): Promise<antecedentesMetrorragia> {
    const listadoAntecedentesMetrorragia =
      await this.antecedenteMetrorragiaRepository.findOneBy({ id });
    return listadoAntecedentesMetrorragia;
  }

  async updateAntecedenteMetrorragia(
    updatedAntecedenteMetrorragia: UpdateAntecedentesMetrorragiaDto,
  ): Promise<antecedentesMetrorragia> {
    const antecedenteActualizado =
      await this.antecedenteMetrorragiaRepository.save(
        updatedAntecedenteMetrorragia,
      );
    return antecedenteActualizado;
  }
}
