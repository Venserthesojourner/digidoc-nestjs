import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AntecedentesMetrorragiaService } from './antecedentes-metrorragia.service';
import { CreateAntecedenteMetrorragiaDto } from './dto/create-antecedentes-metrorragia.dto';

@Controller('antecedentes/metrorragia')
export class AntecedentesMetrorragiaController {
  constructor(
    private readonly antecedentesMetrorragiaService: AntecedentesMetrorragiaService,
  ) {
    //Nada
  }

  // Rutas
  @Post()
  async createAntecedenteMetrorragia(
    @Body() payload: CreateAntecedenteMetrorragiaDto,
  ) {
    return this.antecedentesMetrorragiaService.createAntecedentesMetrorragia(
      payload,
    );
  }

  @Get(':id')
  async findOneAntecedenteMetrorragia(
    @Body() payload: CreateAntecedenteMetrorragiaDto,
    id: number,
  ) {
    return this.antecedentesMetrorragiaService.findOneAntecedenteMetrorragia(
      id,
    );
  }

  @Get()
  async findAllAntecedentesMetrorragia() {
    return this.antecedentesMetrorragiaService.findAllAntecedentesMetrorragia();
  }

  @Put(':id')
  async updateAntecedenteMetrorragia(
    @Body() payload: CreateAntecedenteMetrorragiaDto,
    @Param('id') id: number,
  ) {
    const encuentraAntecedente =
      await this.antecedentesMetrorragiaService.findOneAntecedenteMetrorragia(
        id,
      );
    if (encuentraAntecedente) {
      return this.antecedentesMetrorragiaService.updateAntecedenteMetrorragia(
        payload,
      );
    } else {
      throw new Error('El id Solicitado no existe');
    }
  }
}
