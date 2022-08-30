import { EntityRepository, Repository } from 'typeorm';
import { diagnosticoSignosVitales } from '../entity/diagostico-signos-vitales.entity';

@EntityRepository(diagnosticoSignosVitales)
export class DiagnosticoSignosVitalesRepository extends Repository<diagnosticoSignosVitales> {}
