import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CreateAntecedenteGinecobstetricoDto } from './dto/create-antecedentes-ginobstetricos.dto';
import { AntecedentesGinecobstetricos } from './entity/antecedentes-ginecobstetricos.entity';

@Injectable()
export class AntecedentesGinecobstetricosService {
  constructor(
    @Inject('ANTECEDENTES_GINECOBSTETRICOS_REPOSITORY')
    private readonly antecedentesGinecobstetricosRepo: Repository<AntecedentesGinecobstetricos>,
  ) {}
  //Create AntecedentesGinecobstetricos
  async createNuevoAntecendenteGinobstetrico(
    payload: CreateAntecedenteGinecobstetricoDto,
  ): Promise<AntecedentesGinecobstetricos> {
    return await this.antecedentesGinecobstetricosRepo.save(payload);
  }
  // Find all records en AntecedentesGinecobstetricos
  async ObtenerListadoAntecedentesGinecobstetricos(): Promise<
    AntecedentesGinecobstetricos[]
  > {
    return await this.antecedentesGinecobstetricosRepo.find();
  }
  // Find one by DNI
  async findAntecedentebyDocumentoPaciente(
    documento_paciente: number,
  ): Promise<AntecedentesGinecobstetricos> {
    return await this.antecedentesGinecobstetricosRepo.findOneBy({
      documento_paciente: documento_paciente,
    });
  }
  // Update
  async updateAntecedenteGinecobstetrico(
    documento_paciente: number,
    updateAntecedenteGinecobstetricoDto: QueryDeepPartialEntity<AntecedentesGinecobstetricos>,
  ): Promise<AntecedentesGinecobstetricos> {
    await this.antecedentesGinecobstetricosRepo.update(
      { documento_paciente: documento_paciente },
      updateAntecedenteGinecobstetricoDto,
    );
    const object = await this.antecedentesGinecobstetricosRepo.findOneBy({
      documento_paciente: documento_paciente,
    });
    return object;
  }
}
