import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateDiagnosticoSignosVitalesDto {
  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  normal: boolean;

  @IsString()
  @ApiProperty()
  @IsOptional()
  detalle: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  plan: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  observaciones: string;
}
