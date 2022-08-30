import { PartialType } from '@nestjs/swagger';
import { CreateDiagnosticoFetoDto } from './create-diagnostico-feto.dto';

export class UpdateDiagnosticoFetoDto extends PartialType(
  CreateDiagnosticoFetoDto,
) {}
