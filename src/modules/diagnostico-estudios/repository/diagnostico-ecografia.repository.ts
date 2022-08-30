import { EntityRepository, Repository } from 'typeorm';
import { diagnosticoEstudios } from '../entity/diagnostico-estudios.entity';

@EntityRepository(diagnosticoEstudios)
export class DiagnosticoEstudiosRepository extends Repository<diagnosticoEstudios> {}
