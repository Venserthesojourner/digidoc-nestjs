import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, ValidateNested } from 'class-validator';
import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import { tipo_serologia } from '../entity/serologia.entity';

export class CreateAntecedentesSerologiasDto {
  @ApiProperty()
  @IsEnum({
    enum: tipo_serologia,
    enumname: tipo_serologia,
  })
  tipoSerologia: tipo_serologia;

  @ApiProperty()
  @IsBoolean()
  estado: boolean;

  @Type(() => antecedentes)
  @ValidateNested()
  antecedente: antecedentes;
}
