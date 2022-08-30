import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CreateAntecedenteGinecobstetricoDto } from './dto/create-antecedentes-ginobstetricos.dto';
import { antecedentesGinecobstetricos } from './entity/antecedentes-ginecobstetricos.entity';

@Injectable()
export class AntecedentesGinecobstetricosService {
  constructor(
    @InjectRepository(antecedentesGinecobstetricos)
    private readonly antecedentesGinecobstetricosRepo: Repository<antecedentesGinecobstetricos>,
  ) {}
  //Create AntecedentesGinecobstetricos
  async createNuevoAntecendenteGinobstetrico(
    payload: CreateAntecedenteGinecobstetricoDto,
  ): Promise<antecedentesGinecobstetricos> {
    return await this.antecedentesGinecobstetricosRepo.save(payload);
  }
  // Find all records en AntecedentesGinecobstetricos
  async ObtenerListadoAntecedentesGinecobstetricos(): Promise<
    antecedentesGinecobstetricos[]
  > {
    return await this.antecedentesGinecobstetricosRepo.find();
  }
  // Find one by DNI
  async findAntecedentebyDocumentoPaciente(
    documento_paciente: string,
  ): Promise<antecedentesGinecobstetricos> {
    return await this.antecedentesGinecobstetricosRepo.findOneBy({
      dni_paciente: documento_paciente,
    });
  }
  // Update
  async updateAntecedenteGinecobstetrico(
    documento_paciente: string,
    updateAntecedenteGinecobstetricoDto: QueryDeepPartialEntity<antecedentesGinecobstetricos>,
  ): Promise<antecedentesGinecobstetricos> {
    await this.antecedentesGinecobstetricosRepo.update(
      { dni_paciente: documento_paciente },
      updateAntecedenteGinecobstetricoDto,
    );
    const object = await this.antecedentesGinecobstetricosRepo.findOneBy({
      dni_paciente: documento_paciente,
    });
    return object;
  }
}
