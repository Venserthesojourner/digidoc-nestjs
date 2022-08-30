import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import { diagnostico } from 'src/modules/diagnostico/entity/diagnostico.entity';
import { CreateProtocoloDto } from 'src/modules/protocolo/dto/create.protocolo.dto';

export class CreateProtocoloMaternidadIngresoDto extends CreateProtocoloDto {
  @ApiProperty()
  @Type(() => antecedentes)
  antecedentes?: antecedentes;
  @ApiProperty()
  @Type(() => diagnostico)
  diagnostico?: diagnostico;
}
