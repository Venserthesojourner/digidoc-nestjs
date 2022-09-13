import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAntecedentesSerologiasDto } from './dto/create-antecedentes-serologias.dto';
import { UpdateAntecedenteSerologiaDto } from './dto/update-antecedentes-serologia.dto';
import { antecedentesSerologias } from './entity/serologia.entity';
import { AntecedentesSerologiaService } from './serologia.service';

@Controller('antecedentes/serologia')
export class SerologiaController {
  constructor(
    private readonly antecedentesSerologiaService: AntecedentesSerologiaService,
  ) { }

  @Get()
  getAll() {
    return this.antecedentesSerologiaService.findEachAntecedentesSerologia();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.antecedentesSerologiaService.findOneAntecedenteSerologia(id);
  }

  @Post()
  addOne(
    @Body() createAntecedentesSerologia: CreateAntecedentesSerologiasDto,
  ): Promise<antecedentesSerologias> {
    return this.antecedentesSerologiaService.insertAntecedentesSerologia(
      createAntecedentesSerologia,
    );
  }

  @Put(':id')
  updateOne(
    @Param('id') id: number,
    @Body() updatedSerologia: UpdateAntecedenteSerologiaDto,
  ) {
    return this.antecedentesSerologiaService.updateAntecedenteSerologia(
      id,
      updatedSerologia,
    );
  }
}
