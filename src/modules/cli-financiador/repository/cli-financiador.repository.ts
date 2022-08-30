import { EntityRepository, Repository } from 'typeorm';
import { CliFinanciador } from 'src/modules/cli-financiador/entity/cli-financiador.entity';

@EntityRepository(CliFinanciador)
export class CliFinanciadorRepository extends Repository<CliFinanciador> {}
