import { PartialType } from '@nestjs/swagger';
import { CreateCliFinanciadorPacienteDto } from './create-cli-financiador-paciente.dto';

export class UpdateCliFinanciadorPacienteDto extends PartialType(
  CreateCliFinanciadorPacienteDto,
) {}
