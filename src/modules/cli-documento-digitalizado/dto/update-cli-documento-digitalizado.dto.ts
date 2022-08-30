import { PartialType } from '@nestjs/swagger';
import { CreateCliDocumentoDigitalizadoDto } from './create-cli-documento-digitalizado.dto';

export class UpdateCliDocumentoDigitalizadoDto extends PartialType(
  CreateCliDocumentoDigitalizadoDto,
) {}
