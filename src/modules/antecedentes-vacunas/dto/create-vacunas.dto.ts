import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAntecedentesVacunasDto {
  @IsString()
  @ApiProperty()
  nombreVacuna?: string;

  /*   @IsBoolean()
    @ApiProperty()
    poseeVacuna?: boolean;
  
    paciente: paciente; */
}
