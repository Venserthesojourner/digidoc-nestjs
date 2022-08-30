import { Injectable } from '@nestjs/common';
import { IsBoolean, IsString } from 'class-validator';

@Injectable()
export class CreateDiagnosticoEstudiosDto {
  @IsString()
  nombre: string;

  @IsBoolean()
  resultado: boolean;

  @IsString()
  observaciones: string;

  //https://stackoverflow.com/questions/57797381/validation-does-not-work-with-partialdto-nestjs
}
