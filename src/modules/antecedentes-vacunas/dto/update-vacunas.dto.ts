import { PartialType } from '@nestjs/swagger';
import { CreateAntecedentesVacunasDto } from './create-vacunas.dto';

export class UpdateAntecedenteVacunasDto extends PartialType(
  CreateAntecedentesVacunasDto,
) {}
//
