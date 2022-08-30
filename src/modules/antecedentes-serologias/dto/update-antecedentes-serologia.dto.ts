import { PartialType } from '@nestjs/swagger';
import { CreateAntecedentesSerologiasDto } from './create-antecedentes-serologias.dto';
export class UpdateAntecedenteSerologiaDto extends PartialType(
  CreateAntecedentesSerologiasDto,
) {}
