import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';

export class CreateProtocoloDto {
  @IsAlpha()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  nombre_protocolo?: string;
}
