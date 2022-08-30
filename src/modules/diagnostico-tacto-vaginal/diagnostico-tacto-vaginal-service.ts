import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticoTactoVaginalDto } from './dto/create-diagnostico-tacto-vaginal.dto';
import { UpdateDiagnosticoTactoVaginalDto } from './dto/update-diagnostico-tacto-vaginal.dto';
import { diagnosticoTactoVaginal } from './entity/diagnostico-tacto-vaginal.entity';

@Injectable()
export class DiagnosticoTactoVaginalService {
  constructor(
    @InjectRepository(diagnosticoTactoVaginal)
    private readonly tactoVRepo: Repository<diagnosticoTactoVaginal>,
  ) {}

  async insertNewDiagnosticoTactoVaginal(
    nuevoTactoV: CreateDiagnosticoTactoVaginalDto,
  ) {
    return await this.tactoVRepo.save(nuevoTactoV);
  }
  async findOneDiagnosticoTactoVaginal(id: number) {
    return await this.tactoVRepo.findOneBy({ id: id });
  }
  async findEachDiagnosticoTactoVaginal() {
    return await this.tactoVRepo.find();
  }
  async updateSingleDiagnosticoTactoVaginal(
    id: number,
    updatedDataDTV: UpdateDiagnosticoTactoVaginalDto,
  ) {
    const outDatedTactV = await this.tactoVRepo.findOneBy({ id: id });
    const upDatedTactV = Object.assign(outDatedTactV, updatedDataDTV);
    return await this.tactoVRepo.save(upDatedTactV);
  }
}
