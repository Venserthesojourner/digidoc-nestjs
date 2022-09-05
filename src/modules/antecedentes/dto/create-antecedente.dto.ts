import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
import { antecedentesGinecobstetricos } from 'src/modules/antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity';
import { antecedentesMetrorragia } from 'src/modules/antecedentes-metrorragia/entity/metrorragia.entity';
import { antecedentesSerologias } from 'src/modules/antecedentes-serologias/entity/serologia.entity';
import { antecedentesVacunas } from 'src/modules/antecedentes-vacunas/entity/vacunas.entity';

import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { Timestamp } from 'typeorm';
import { grupoSanguineo } from './../entity/antecedentes.entity';
@Injectable()
export class CreateAntecedenteDto {
  @Type(() => paciente)
  @ValidateNested()
  paciente: paciente;
  @IsEnum({
    enum: grupoSanguineo,
    enumName: 'grupoSanguineo',
  })
  grupo_sanguineo: grupoSanguineo;
  @Type(() => antecedentesGinecobstetricos)
  @ValidateNested()
  antecedentes_ginobstetricos: antecedentesGinecobstetricos;
  @Type(() => antecedentesMetrorragia)
  @ValidateNested()
  metrorragia: antecedentesMetrorragia[];
  @Type(() => antecedentesSerologias)
  @ValidateNested()
  serogolia: antecedentesSerologias[];
  @Type(() => antecedentesVacunas)
  @ValidateNested()
  vacunas?: antecedentesVacunas[];
  antecedentes_alergicos: string;
  antecedentes_quirurgicos: string;
  antecedentes_sociales: string;
  antecedentes_obstetricos: string;
  antecedentes_medicacion_actual: string;
}
