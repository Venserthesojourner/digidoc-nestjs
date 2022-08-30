import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { diagnosticoEstudiosService } from './diagnostico-estudios.service';
import { CreateDiagnosticoEstudiosDto } from './dto/create-diagnostico-estudios.dto';
import { UpdateDiagnosticoEstudiosDto } from './dto/update-diagnostico-estudios-dto';
import { diagnosticoEstudios } from './entity/diagnostico-estudios.entity';

@Controller('diagnostico/estudios')
export class diagnosticoEstudiosController {
  constructor(private readonly estudiosService: diagnosticoEstudiosService) {}

  //Rutas
  @Post()
  async create(@Body() nuevoEstudio: CreateDiagnosticoEstudiosDto) {
    return await this.estudiosService.insertNewEstudio(nuevoEstudio);
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.estudiosService.findOneEstudio(id);
  }
  @Get()
  async findAll(): Promise<diagnosticoEstudios[]> {
    return await this.estudiosService.findAllEstudios();
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedEstudio: UpdateDiagnosticoEstudiosDto,
  ) {
    return await this.estudiosService.updateEstudio(id, updatedEstudio);
  }
}
