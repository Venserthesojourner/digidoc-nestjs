import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticoSignosVitalesDto } from './dto/create-diagnostico-signos-vitales-dto';
import { UpdateDiagnosticoSignosVitalesDto } from './dto/update-diagnostico-signos-vitales.dto';
import { diagnosticoSignosVitales } from './entity/diagostico-signos-vitales.entity';

@Injectable()
export class DiagnosticoSignosVitalesService {
  constructor(
    @InjectRepository(diagnosticoSignosVitales)
    private readonly signosVitalesRepo: Repository<diagnosticoSignosVitales>,
  ) {}
  async insertDiagnosticoSignosVitales(
    nuevoDiagnosticoSignosVitales: CreateDiagnosticoSignosVitalesDto,
  ) {
    return await this.signosVitalesRepo.save(nuevoDiagnosticoSignosVitales);
  }
  async findOneDiagnosticoSignosVitales(id: number) {
    return await this.signosVitalesRepo.findOneBy({ id: id });
  }
  async findEachDiagnosticoSignosVitales() {
    return await this.signosVitalesRepo.find();
  }
  async updateSingleDiagnosticoSignosVitales(
    id: number,
    updatedSVData: UpdateDiagnosticoSignosVitalesDto,
  ) {
    const outdatedSV = await this.signosVitalesRepo.findOneByOrFail({ id: id });
    const updatedSV = Object.assign(outdatedSV, updatedSVData);
    return await this.signosVitalesRepo.update({ id: id }, updatedSV);
  }
}
