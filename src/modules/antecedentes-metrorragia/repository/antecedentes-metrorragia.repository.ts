import { EntityRepository, Repository } from 'typeorm';
import { antecedentesMetrorragia } from '../entity/metrorragia.entity';

@EntityRepository(antecedentesMetrorragia)
export class AntecedentesMetrorragiaRepository extends Repository<antecedentesMetrorragia> {}
