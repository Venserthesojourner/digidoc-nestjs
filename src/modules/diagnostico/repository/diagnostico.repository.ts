import { EntityRepository, Repository } from 'typeorm';
import { diagnostico } from '../entity/diagnostico.entity';

@EntityRepository(diagnostico)
export class DiagnosticoRepository extends Repository<diagnostico> {}
