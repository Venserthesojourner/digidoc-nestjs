import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

export class CreateAntecedentesVacunasDto {
  @IsString()
  @ApiProperty()
  nombreVacuna?: string;

  @IsBoolean()
  @ApiProperty()
  poseeVacuna?: boolean;

  paciente: paciente;
}
