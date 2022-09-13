import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio-dto';
import { UpdateEpisodioDto } from './dto/update-episodio-dto';
import { episodio } from './entity/episodio.entity';
import { episodioService } from './episodio.service';

@Controller('episodio')
export class episodioNoPatientController {
  constructor(private readonly episodioServ: episodioService) {
    //
  }
  @Get()
  async getAll() {
    return await this.episodioServ.getAllEpisodios();
  }
}

@Controller('paciente/:id/episodio')
export class episodioController {
  constructor(private readonly episodioServ: episodioService) {
    //
  }

  @Post()
  async insert(
    @Param('id', ParseIntPipe) pacienteId: number,
    @Body() nuevoEpisodio: CreateEpisodioDto,
  ): Promise<episodio> {
    return await this.episodioServ.addEpisodio(nuevoEpisodio, pacienteId);
  }
  @Get()
  async getAll(@Param('id', ParseIntPipe) pacienteId: number) {
    return await this.episodioServ.getAllEpisodiosofOnePatient(pacienteId);
  }
  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return await this.episodioServ.getOneEpisodio(id);
  }
  @Put('/:id')
  async updateOne(
    @Param('id') id: number,
    @Body() actualizado: UpdateEpisodioDto,
  ): Promise<episodio> {
    return await this.episodioServ.updateOneEpisodio(id, actualizado);
  }
}
