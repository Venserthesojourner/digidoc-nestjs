import { IsEnum } from 'class-validator';
import {
  liquidoAmniotico,
  plano,
  presentacion,
} from '../entity/diagnostico-feto.entity';

export class CreateDiagnosticoFetoDto {
  @IsEnum({
    enum: presentacion,
    enumname: presentacion,
  })
  presentacion: presentacion;

  posicion: string;
  membranasOvulares: string;

  @IsEnum({
    enum: plano,
    enumname: plano,
  })
  plano: plano;

  @IsEnum({
    enum: liquidoAmniotico,
    enumname: liquidoAmniotico,
  })
  liquidoAmniotico: liquidoAmniotico;
}
