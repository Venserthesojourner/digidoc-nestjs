import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DiagnosticoFetoService } from './diagnostico-feto.service';
import { CreateDiagnosticoFetoDto } from './dto/create-diagnostico-feto.dto';
import { UpdateDiagnosticoFetoDto } from './dto/update-diagnostico-feto.dto';
import { diagnosticoFeto } from './entity/diagnostico-feto.entity';

@Controller('diagnostico/feto')
export class DiagnosticoFetoController {
  constructor(
    private readonly diagnosticoFetoService: DiagnosticoFetoService,
  ) {}

  @Post()
  async create(
    @Body() nuevoDiagnosticoFeto: CreateDiagnosticoFetoDto,
  ): Promise<diagnosticoFeto> {
    return this.diagnosticoFetoService.createDiagnosticoFeto(
      nuevoDiagnosticoFeto,
    );
  }

  @Get()
  async getAll() {
    return await this.diagnosticoFetoService.findAllDiagnosticoFeto();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.diagnosticoFetoService.findOneDiagnosticoFeto(id);
  }

  @Put(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    updatedDiagnostico: UpdateDiagnosticoFetoDto,
  ): Promise<diagnosticoFeto> {
    return await this.diagnosticoFetoService.updateDiagnosticoFeto(
      id,
      updatedDiagnostico,
    );
  }
}
