import { PartialType } from '@nestjs/mapped-types';
import { diagnosticoTactoVaginal } from '../entity/diagnostico-tacto-vaginal.entity';

export class UpdateDiagnosticoTactoVaginalDto extends PartialType(
  diagnosticoTactoVaginal,
) {}
