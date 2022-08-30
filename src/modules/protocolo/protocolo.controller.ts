import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProtocoloDto } from './dto/create.protocolo.dto';
import { UpdateProtocoloDto } from './dto/update.protocolo.dto';
import { protocolo } from './entity/protocolo.entity';
import { ProtocoloService } from './protocolo.service';

@Controller('protocolo')
export class ProtocoloController {
  constructor(private readonly protocoloService: ProtocoloService) {}

  @Get('')
  findAllProtocols(): Promise<protocolo[]> {
    return this.protocoloService.findAllProtocols();
  }

  @Get('/:id')
  getSingleProtocol(@Param('id') id_protocolo: number): Promise<protocolo> {
    return this.protocoloService.getSingleProtocol(id_protocolo);
  }

  @Post('')
  addProtocol(@Body() protocol_data: CreateProtocoloDto): Promise<protocolo> {
    return this.protocoloService.addProtocol(protocol_data);
  }

  @Put('/:id')
  updateProtocol(
    @Param('id') id_outdated_data: number,
    @Body() updated_data: UpdateProtocoloDto,
  ) {
    return this.protocoloService.updateProtocol(id_outdated_data, updated_data);
  }

  @Delete('/:id')
  deleteProtocol(@Param('id') id_protocol: number) {
    return this.protocoloService.deleteProtocol(id_protocol);
  }
}
