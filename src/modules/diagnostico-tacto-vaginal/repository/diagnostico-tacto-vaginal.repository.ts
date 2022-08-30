import { EntityRepository, Repository } from 'typeorm';
import { diagnosticoTactoVaginal } from '../entity/diagnostico-tacto-vaginal.entity';

@EntityRepository(diagnosticoTactoVaginal)
export class DiagnosticoTactoVaginalRepository extends Repository<diagnosticoTactoVaginal> {}
