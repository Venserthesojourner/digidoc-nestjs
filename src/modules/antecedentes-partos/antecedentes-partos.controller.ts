import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AntecedentesPartosService } from './antecedentes-partos.service';
import { CreateAntecendentePartoDto } from './dto/create-antecedentes-parto.dto';
import { UpdateAntecedentePartoDto } from './dto/update-antecedentes-parto.dto';
import { antecedentesPartos } from './entity/partos.entity';

@Controller('antecedentes/partos')
export class AntecedentesPartosController {
  constructor(
    private readonly antecedentePartoService: AntecedentesPartosService,
  ) {}

  @Post()
  async create(@Body() nuevoAntecedenteParto: CreateAntecendentePartoDto) {
    return await this.antecedentePartoService.createAntecedenteParto(
      nuevoAntecedenteParto,
    );
  }
  @Get()
  async getAll(): Promise<antecedentesPartos[]> {
    return await this.antecedentePartoService.findEachAntecedentesPartos();
  }
  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<antecedentesPartos> {
    return await this.antecedentePartoService.findSingleAntecedenteParto(id);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    antecedenteActualizado: UpdateAntecedentePartoDto,
  ) {
    return await this.antecedentePartoService.updateAntecedenteParto(
      id,
      antecedenteActualizado,
    );
  }
}
