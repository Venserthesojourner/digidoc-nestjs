import { PartialType } from '@nestjs/swagger';
import { CreateCliFinanciadorDto } from './create-cli-financiador.dto';

export class UpdateCliFinanciadorDto extends PartialType(CreateCliFinanciadorDto) {}
