import { EntityRepository, Repository } from 'typeorm';
import { diagnosticoFeto } from '../entity/diagnostico-feto.entity';

@EntityRepository(diagnosticoFeto)
export class DiagnosticoFetoRepository extends Repository<diagnosticoFeto> {}
