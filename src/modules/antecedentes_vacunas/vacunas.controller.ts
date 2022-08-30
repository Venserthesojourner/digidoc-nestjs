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
import { CreateVacunasDto } from './dto/create-vacunas.dto';
//import { Vacunas } from './entity/vacunas.entity';
import { AntecedentesVacunasService } from './vacunas.service';

@Controller('antecedentes-vacunas')
export class AntecedentesVacunasController {
  constructor(
    private readonly antecedentesVacunasService: AntecedentesVacunasService,
  ) {}
  @Get()
  getAllVaccines() {
    return this.antecedentesVacunasService.getAll();
  }
  @Get('/:id')
  findVaccine(@Param('id', ParseIntPipe) id: number) {
    return this.antecedentesVacunasService.getOne(+id);
  }
  @Post()
  addVaccine(@Body() createVacunaDto: CreateVacunasDto) {
    return this.antecedentesVacunasService.create(createVacunaDto);
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
