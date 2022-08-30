import { EntityRepository, Repository } from 'typeorm';
import { AntedecentesPartos } from '../entity/partos.entity';

@EntityRepository(AntedecentesPartos)
export class AntecedentesPartosRepository extends Repository<AntedecentesPartos> {}
