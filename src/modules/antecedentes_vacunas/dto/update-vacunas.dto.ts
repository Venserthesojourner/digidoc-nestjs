import { PartialType } from '@nestjs/swagger';
import { CreateVacunasDto } from './create-vacunas.dto';

export class UpdateVacunasDto extends PartialType(CreateVacunasDto) {}
