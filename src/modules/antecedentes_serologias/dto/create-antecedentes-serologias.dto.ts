import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateAntecedentesSerologiasDto {
  @ApiProperty()
  @IsString()
  tipoSerologia: string;

  @ApiProperty()
  @IsBoolean()
  estado: boolean;
}
