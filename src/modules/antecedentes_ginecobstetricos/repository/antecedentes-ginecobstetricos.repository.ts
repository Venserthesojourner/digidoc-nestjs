import { EntityRepository, Repository } from 'typeorm';
import { AntecedentesGinecobstetricos } from '../entity/antecedentes-ginecobstetricos.entity';

@EntityRepository(AntecedentesGinecobstetricos)
export class AntecedentesGinecobstetricosRepository extends Repository<AntecedentesGinecobstetricos> {}
