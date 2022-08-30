import { IsBoolean, IsDateString } from 'class-validator';
import { habitos_toxicos_periodo } from '../entity/antecedentes-ginecobstetricos.entity';

export class CreateAntecedenteGinecobstetricoDto {
  @IsDateString()
  fecha_probable_parto: Date;
  @IsBoolean()
  habitos_toxicos: boolean;
  habitos_toxicos_periodo: habitos_toxicos_periodo;
  tiene_alergias: boolean;
  alergias_declaradas: string;
}

//https://wanago.io/2021/09/27/api-nestjs-put-patch-mongodb-mongoose/
