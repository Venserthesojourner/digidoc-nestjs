import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
export class CreateAntecedenteMetrorragiaDto {
  @ApiProperty()
  idAntecedentes: antecedentes;

  @IsBoolean()
  @ApiProperty()
  posee: boolean;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  tiempoEvolucion?: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  cantidad?: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  auscultacion?: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  @Length(0, 200)
  dinamicaUterina?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  @Length(0, 50)
  tonoUterino?: string;
}
//
