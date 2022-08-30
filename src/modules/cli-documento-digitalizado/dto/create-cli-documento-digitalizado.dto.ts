import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional } from 'class-validator';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

export class CreateCliDocumentoDigitalizadoDto {
  [x: string]: any;
  @IsString()
  @IsOptional()
  @ApiProperty()
  descripcion?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  tags?: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  fecha?: Date;

  @IsString()
  @ApiProperty()
  tipo: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  categoria?: string;

  @IsNumber()
  @ApiProperty()
  cliPaciente: paciente;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  cliEpisodio?: number;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  bajaFecha?: Date;
}
