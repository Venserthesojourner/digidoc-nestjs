import { EntityRepository, Repository } from 'typeorm';
import { antecedentes } from '../entity/antecedentes.entity';

@EntityRepository(antecedentes)
export class AntecedentesRepository extends Repository<antecedentes> {}
