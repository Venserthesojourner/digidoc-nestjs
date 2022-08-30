import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CliFinanciador } from 'src/modules/cli-financiador/entity/cli-financiador.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

export class CreateCliFinanciadorPacienteDto {
  @IsNumber()
  @ApiProperty()
  cliFinanciador: CliFinanciador;

  @IsNumber()
  @ApiProperty()
  cliPaciente: paciente;
}
