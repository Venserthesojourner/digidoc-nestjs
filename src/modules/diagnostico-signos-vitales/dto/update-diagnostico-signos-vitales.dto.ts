import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosticoSignosVitalesDto } from './create-diagnostico-signos-vitales-dto';

export class UpdateDiagnosticoSignosVitalesDto extends PartialType(
  CreateDiagnosticoSignosVitalesDto,
) {}
