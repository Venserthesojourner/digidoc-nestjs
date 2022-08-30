import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, IsOptional } from 'class-validator';
import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';

export class CreateCliDocumentoDigitalizadoAdjuntoDto {
  @IsNumber()
  @ApiProperty()
  cliDocumentoDigitalizado: CliDocumentoDigitalizado;

  @IsString()
  @ApiProperty()
  contentType: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  filename: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  filenameThumbnail?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  bytes?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  alto?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  ancho?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  duracion?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  sha1?: string;
}
