import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticoFetoDto } from './dto/create-diagnostico-feto.dto';
import { UpdateDiagnosticoFetoDto } from './dto/update-diagnostico-feto.dto';
import { diagnosticoFeto } from './entity/diagnostico-feto.entity';

@Injectable()
export class DiagnosticoFetoService {
  constructor(
    @InjectRepository(diagnosticoFeto)
    private readonly diagnosticoFetoRepo: Repository<diagnosticoFeto>,
  ) {}

  async createDiagnosticoFeto(diagnostico: CreateDiagnosticoFetoDto) {
    return this.diagnosticoFetoRepo.save(diagnostico);
  }
  async updateDiagnosticoFeto(
    id: number,
    diagnostico: UpdateDiagnosticoFetoDto,
  ) {
    return this.diagnosticoFetoRepo.save(diagnostico);
  }
  async findOneDiagnosticoFeto(id: number): Promise<diagnosticoFeto> {
    return await this.diagnosticoFetoRepo.findOneBy({ id: id });
  }
  async findAllDiagnosticoFeto(): Promise<diagnosticoFeto[]> {
    return await this.diagnosticoFetoRepo.find();
  }
}
