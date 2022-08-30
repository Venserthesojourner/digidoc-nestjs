import { PartialType } from '@nestjs/mapped-types';
import { CreateProtocoloMaternidadIngresoDto } from './create-mat-ingreso-prot.dto';

export class UpdateProtocoloMaternidadIngresoDto extends PartialType(
  CreateProtocoloMaternidadIngresoDto,
) {}
