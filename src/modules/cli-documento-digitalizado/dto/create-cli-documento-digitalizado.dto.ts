import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional } from 'class-validator';
import { episodio } from 'src/modules/episodio/entity/episodio.entity';
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
  @ApiProperty({ type: () => paciente })
  cliPaciente?: paciente;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: () => episodio })
  cliEpisodio?: episodio;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  bajaFecha?: Date;
}
