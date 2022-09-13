import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
import { antecedentesGinecobstetricos } from 'src/modules/antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity';
import { antecedentesMetrorragia } from 'src/modules/antecedentes-metrorragia/entity/metrorragia.entity';
import { antecedentesSerologias } from 'src/modules/antecedentes-serologias/entity/serologia.entity';
import { antecedentesVacunas } from 'src/modules/antecedentes-vacunas/entity/vacunas.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { grupoSanguineo } from './../entity/antecedentes.entity';
@Injectable()
export class CreateAntecedenteDto {
  @Type(() => paciente)
  @ValidateNested()
  @ApiProperty()
  paciente: paciente;
  @IsEnum({
    enum: grupoSanguineo,
    enumName: 'grupoSanguineo',
  })
  @ApiProperty()
  grupo_sanguineo: grupoSanguineo;
  @Type(() => antecedentesGinecobstetricos)
  @ValidateNested()
  @ApiProperty()
  antecedentes_ginobstetricos: antecedentesGinecobstetricos;
  @Type(() => antecedentesMetrorragia)
  @ValidateNested()
  @ApiProperty()
  metrorragia: antecedentesMetrorragia[];
  @Type(() => antecedentesSerologias)
  @ValidateNested()
  @ApiProperty()
  serogolia: antecedentesSerologias[];
  @Type(() => antecedentesVacunas)
  @ValidateNested()
  @ApiProperty()
  vacunas?: antecedentesVacunas[];
  @ApiProperty()
  antecedentes_alergicos: string;
  @ApiProperty()
  antecedentes_quirurgicos: string;
  @ApiProperty()
  antecedentes_sociales: string;
  @ApiProperty()
  antecedentes_obstetricos: string;
  @ApiProperty()
  antecedentes_medicacion_actual: string;
}
