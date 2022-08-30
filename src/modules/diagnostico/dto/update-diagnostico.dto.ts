import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { CreateDiagnosticoDto } from './create-diagnostico.dto';

@Injectable()
export class UpdateDiagnosticoDto extends PartialType(CreateDiagnosticoDto) {}
