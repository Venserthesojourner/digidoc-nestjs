import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosticoEstudiosDto } from './create-diagnostico-estudios.dto';

export class UpdateDiagnosticoEstudiosDto extends PartialType(
  CreateDiagnosticoEstudiosDto,
) {}
