import { Body, Controller, Get, Post, Put } from '@nestjs/common';
//import { ProtocoloService } from '../protocolo/protocolo.service';
import { CreateProtocoloMaternidadIngresoDto } from './dto/create-mat-ingreso-prot.dto';
import { UpdateProtocoloMaternidadIngresoDto } from './dto/update-mat-ingreso-prot.dto';
import { protocoloMaternidadIngresoService } from './mat_protocolo_ingreso.service';

@Controller('protocolo/maternidad/ingreso')
export class protocoloMaternidadIngresoController {
  constructor(
    //private readonly protocoloService: ProtocoloService,
    private readonly matIngProConService: protocoloMaternidadIngresoService,
  ) {}

  @Post()
  create(@Body() protocolo: CreateProtocoloMaternidadIngresoDto) {
    return this.matIngProConService.createProtMatIngreso(protocolo);
  }

  @Get()
  getAll() {
    return this.matIngProConService.getAll();
  }

  @Get('/:id')
  getOne(id: number) {
    return this.matIngProConService.getOne(id);
  }

  @Put('/:id')
  update(id: number, coso: UpdateProtocoloMaternidadIngresoDto) {
    return this.matIngProConService.updateOne(id, coso);
  }
}
