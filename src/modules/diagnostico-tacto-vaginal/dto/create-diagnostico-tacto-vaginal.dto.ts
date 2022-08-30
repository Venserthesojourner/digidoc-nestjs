import { IsEnum, IsNotEmpty } from 'class-validator';
import {
  borramiento,
  cuello,
  dilatacion,
} from '../entity/diagnostico-tacto-vaginal.entity';

export class CreateDiagnosticoTactoVaginalDto {
  @IsEnum({
    enum: cuello,
    enumname: cuello,
  })
  @IsNotEmpty()
  cuello: cuello;

  @IsEnum({
    enum: borramiento,
    enumname: borramiento,
  })
  @IsNotEmpty()
  borramiento: borramiento;

  @IsEnum({
    enum: dilatacion,
    enumname: dilatacion,
  })
  @IsNotEmpty()
  dilatacion: dilatacion;
}
