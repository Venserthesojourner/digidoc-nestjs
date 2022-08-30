import { PartialType } from '@nestjs/swagger';
import { CreateAntecendentePartoDto } from './create-antecedentes-parto.dto';

export class UpdateAntecedentePartoDto extends PartialType(
  CreateAntecendentePartoDto,
) {}
