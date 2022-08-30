import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import { CreatePacienteDto } from 'src/modules/paciente/dto/create-paciente.dto';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { CreateProtocoloDto } from 'src/modules/protocolo/dto/create.protocolo.dto';
import { protocolo } from 'src/modules/protocolo/entity/protocolo.entity';

@Injectable()
export class CreateEpisodioDto {
  id: number;
  @Type(() => paciente)
  pacienteData: CreatePacienteDto;
  @Type(() => protocolo)
  protocoloClass: CreateProtocoloDto;
}
