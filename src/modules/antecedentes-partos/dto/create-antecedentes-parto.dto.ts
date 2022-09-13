import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { tipo_parto } from '../entity/partos.entity';

export class CreateAntecendentePartoDto {
  @Type(() => paciente)
  @ValidateNested()
  pacienteId: paciente;
  @IsEnum({
    enum: tipo_parto,
  })
  tipoParto: tipo_parto;
  @IsNumber()
  @ApiProperty()
  cantidad: number;
}
