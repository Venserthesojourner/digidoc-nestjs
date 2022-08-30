import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DiagnosticoService } from './diagnostico.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { diagnostico } from './entity/diagnostico.entity';

@Controller('diagnostico')
export class DiagnosticoController {
  constructor(private readonly diagnosticoService: DiagnosticoService) {}
  @Post()
  async create(diagnosticoDto: CreateDiagnosticoDto): Promise<diagnostico> {
    return await this.diagnosticoService.createDiagnostico(diagnosticoDto);
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<diagnostico> {
    return await this.diagnosticoService.getOneDiagnostico(id);
  }
  @Get()
  async getAll(): Promise<diagnostico[]> {
    return await this.diagnosticoService.getAllDiagnosticos();
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() diagnosticoActualizado: UpdateDiagnosticoDto,
  ): Promise<diagnostico> {
    return await this.diagnosticoService.updateDiagnostico(
      id,
      diagnosticoActualizado,
    );
  }
}
