import { PartialType } from '@nestjs/swagger';
import { CreateAntecedenteMetrorragiaDto } from './create-antecedentes-metrorragia.dto';

export class UpdateAntecedentesMetrorragiaDto extends PartialType(
  CreateAntecedenteMetrorragiaDto,
) {}
//
