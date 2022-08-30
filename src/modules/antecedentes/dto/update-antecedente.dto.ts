import { PartialType } from '@nestjs/swagger';
import { CreateAntecedenteDto } from './create-antecedente.dto';

export class UpdateAntecedenteDto extends PartialType(CreateAntecedenteDto) {}
