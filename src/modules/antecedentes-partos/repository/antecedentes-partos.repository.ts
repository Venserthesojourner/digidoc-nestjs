import { EntityRepository, Repository } from 'typeorm';
import { antecedentesPartos } from '../entity/partos.entity';

@EntityRepository(antecedentesPartos)
export class AntecedentesPartosRepository extends Repository<antecedentesPartos> {}
//
