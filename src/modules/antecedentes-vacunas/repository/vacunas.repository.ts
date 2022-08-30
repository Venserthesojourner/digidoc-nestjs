import { EntityRepository, Repository } from 'typeorm';
import { antecedentesVacunas } from '../entity/vacunas.entity';

@EntityRepository(antecedentesVacunas)
export class AntecedentesVacunasRepository extends Repository<antecedentesVacunas> {}
