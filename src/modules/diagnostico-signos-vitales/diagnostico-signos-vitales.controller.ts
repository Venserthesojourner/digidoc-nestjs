import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DiagnosticoSignosVitalesService } from './diangostico-signos-vitales.service';
import { CreateDiagnosticoSignosVitalesDto } from './dto/create-diagnostico-signos-vitales-dto';
import { UpdateDiagnosticoSignosVitalesDto } from './dto/update-diagnostico-signos-vitales.dto';

@Controller('diagnostico/signos%20vitales')
export class DiagnosticoSignosVitalesController {
  constructor(
    private readonly signosVitalesService: DiagnosticoSignosVitalesService,
  ) {}
  @Post()
  async create(@Body() nuevoDiagnosticoSV: CreateDiagnosticoSignosVitalesDto) {
    return await this.signosVitalesService.insertDiagnosticoSignosVitales(
      nuevoDiagnosticoSV,
    );
  }
  @Get()
  async getAll() {
    return await this.signosVitalesService.findEachDiagnosticoSignosVitales();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.signosVitalesService.findOneDiagnosticoSignosVitales(id);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedData: UpdateDiagnosticoSignosVitalesDto,
  ) {
    return await this.signosVitalesService.updateSingleDiagnosticoSignosVitales(
      id,
      updatedData,
    );
  }
}
