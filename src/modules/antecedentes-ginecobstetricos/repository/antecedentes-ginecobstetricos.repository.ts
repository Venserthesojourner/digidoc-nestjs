import { EntityRepository, Repository } from 'typeorm';
import { antecedentesGinecobstetricos } from '../entity/antecedentes-ginecobstetricos.entity';

@EntityRepository(antecedentesGinecobstetricos)
export class AntecedentesGinecobstetricosRepository extends Repository<antecedentesGinecobstetricos> {}
