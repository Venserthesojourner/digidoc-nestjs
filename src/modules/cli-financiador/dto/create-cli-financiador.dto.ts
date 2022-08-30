import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCliFinanciadorDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  nombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cuit: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  activado: number;
}
