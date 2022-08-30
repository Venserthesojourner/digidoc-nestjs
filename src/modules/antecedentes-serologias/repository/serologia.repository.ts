import { EntityRepository, Repository } from 'typeorm';

import { antecedentesSerologias } from '../entity/serologia.entity';

@EntityRepository(antecedentesSerologias)
export class AntecedentesSerologiaRepository extends Repository<antecedentesSerologias> {}
