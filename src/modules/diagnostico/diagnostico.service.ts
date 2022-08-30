import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { diagnostico } from './entity/diagnostico.entity';

@Injectable()
export class DiagnosticoService {
  constructor(
    @InjectRepository(diagnostico)
    private readonly diagnosticoRepo: Repository<diagnostico>,
  ) {}

  async createDiagnostico(
    nuevoDiagnostico: CreateDiagnosticoDto,
  ): Promise<diagnostico> {
    return await this.diagnosticoRepo.save(nuevoDiagnostico);
  }

  async updateDiagnostico(
    id: number,
    nuevoDiagnostico: UpdateDiagnosticoDto,
  ): Promise<any> {
    return await this.diagnosticoRepo.update(id, nuevoDiagnostico);
  }

  async getOneDiagnostico(id: number): Promise<diagnostico> {
    return await this.diagnosticoRepo.findOneBy({ id: id });
  }

  async getAllDiagnosticos(): Promise<diagnostico[]> {
    return await this.diagnosticoRepo.find();
  }
}
