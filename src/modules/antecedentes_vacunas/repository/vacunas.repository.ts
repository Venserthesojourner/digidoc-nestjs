import { EntityRepository, Repository } from 'typeorm';
import { AntecedentesVacunas } from '../entity/vacunas.entity';

@EntityRepository(AntecedentesVacunas)
export class AntecedentesVacunasRepository extends Repository<AntecedentesVacunas> {
  async danceWithVaccines() {
    return 'Dancing Vaccine';
  }
}
