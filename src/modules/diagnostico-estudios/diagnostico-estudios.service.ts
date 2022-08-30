import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDiagnosticoEstudiosDto } from './dto/create-diagnostico-estudios.dto';
import { UpdateDiagnosticoEstudiosDto } from './dto/update-diagnostico-estudios-dto';
import { diagnosticoEstudios } from './entity/diagnostico-estudios.entity';

@Injectable()
export class diagnosticoEstudiosService {
  constructor(
    @Inject('DIAGNOSTICO_ESTUDIOS_REPOSITORY')
    private readonly estudiosRepository: Repository<diagnosticoEstudios>,
  ) {}
  // Insercion:
  async insertNewEstudio(
    nuevoEstudio: CreateDiagnosticoEstudiosDto,
  ): Promise<diagnosticoEstudios> {
    const estudioGenerado = this.estudiosRepository.create(nuevoEstudio);
    return await this.estudiosRepository.save(estudioGenerado);
  }
  // Obtencion de un Estudio:
  async findOneEstudio(id: number): Promise<diagnosticoEstudios> {
    return await this.estudiosRepository.findOneBy({ id: id });
  }
  // Encontrar todos los Estudios
  async findAllEstudios(): Promise<diagnosticoEstudios[]> {
    return await this.estudiosRepository.find();
  }
  // Actualizar un estudio
  async updateEstudio(
    id: number,
    updatedEstudioData: UpdateDiagnosticoEstudiosDto,
  ) {
    const findToUpdate = await this.estudiosRepository.findOneBy({ id: id });
    const updatedEstudioUpdated = Object.assign(
      findToUpdate,
      updatedEstudioData,
    );
    return await this.estudiosRepository.save(updatedEstudioUpdated);
  }
}
