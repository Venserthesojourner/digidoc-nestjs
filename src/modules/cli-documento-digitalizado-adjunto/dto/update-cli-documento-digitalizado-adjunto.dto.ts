import { PartialType } from '@nestjs/swagger';
import { CreateCliDocumentoDigitalizadoAdjuntoDto } from './create-cli-documento-digitalizado-adjunto.dto';

export class UpdateCliDocumentoDigitalizadoAdjuntoDto extends PartialType(
  CreateCliDocumentoDigitalizadoAdjuntoDto,
) {}
