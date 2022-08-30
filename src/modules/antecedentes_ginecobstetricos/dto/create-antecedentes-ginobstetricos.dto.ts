import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { antecedentesPartos } from 'src/modules/antecedentes-partos/entity/partos.entity';

export class CreateAntecedenteGinecobstetricoDto {
  documento_paciente: number;
  fecha_probable_parto: Date;
  habitos_toxicos: boolean;
  habitos_toxicos_periodo?: string;
  tiene_alergias: boolean;
  alergias_declaras?: string;
  @Type(() => antecedentesPartos)
  @ValidateNested()
  partos: antecedentesPartos[];
}
