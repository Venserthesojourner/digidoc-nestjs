import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  nombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  documento: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  tipoDocumento: string;
}
