import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { Timestamp } from 'typeorm';

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

  @IsDateString()
  created_at: Timestamp;
}
