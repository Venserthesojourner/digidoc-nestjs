import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CreateAntecedentesVacunasDto } from './dto/create-vacunas.dto';
import { AntecedentesVacunasService } from './vacunas.service';

@Controller('antecedentes/vacunas')
export class AntecedentesVacunasController {
  constructor(
    private readonly antecedentesVacunasService: AntecedentesVacunasService,
  ) {}
  @Get()
  getAllVaccines() {
    return this.antecedentesVacunasService.getAllAntecedentesVacunas();
  }
  @Get('/:id')
  findVaccine(@Param('id', ParseIntPipe) id: number) {
    return this.antecedentesVacunasService.getOneAntecedenteVacuna(+id);
  }
  @Post()
  addVaccine(@Body() createVacunaDto: CreateAntecedentesVacunasDto) {
    return this.antecedentesVacunasService.createAntecedenteVacuna(
      createVacunaDto,
    );
  }
  @Put('/:id')
  updateVaccine() {
    return 'Vacuna Actualizada';
  }
  @Delete('/:id')
  unrecordVaccine() {
    return 'Vacuna Borrada';
    //Metodo delete: tipo de borrado -> Logico
  }
}
