import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { AntecedentesGinecobstetricosService } from './antecedentesGinecobstetricos.service';

import { CreateAntecedenteGinecobstetricoDto } from './dto/create-antecedentes-ginobstetricos.dto';

@Controller('antecedentes/ginecobstetricos')
export class AntecedentesGinecobstetricosController {
  constructor(
    private readonly AntecedentesGinecologicosService: AntecedentesGinecobstetricosService,
  ) {}

  @Post()
  async create(@Body() payload: CreateAntecedenteGinecobstetricoDto) {
    return await this.AntecedentesGinecologicosService.createNuevoAntecendenteGinobstetrico(
      payload,
    );
  }
  @Get()
  async getAll() {
    return await this.AntecedentesGinecologicosService.ObtenerListadoAntecedentesGinecobstetricos();
  }
  @Get('/:documento_paciente')
  async getOne(@Param('documento_paciente') documento_paciente: string) {
    return await this.AntecedentesGinecologicosService.findAntecedentebyDocumentoPaciente(
      documento_paciente,
    );
  }
  @Put(':/documento-paciente')
  async udpate(
    @Param('documento-paciente') documento_paciente: string,
    @Body() payload: CreateAntecedenteGinecobstetricoDto,
  ) {
    return await this.AntecedentesGinecologicosService.updateAntecedenteGinecobstetrico(
      documento_paciente,
      payload,
    );
  }
}
