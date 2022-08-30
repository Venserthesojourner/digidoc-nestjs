import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio-dto';
import { UpdateEpisodioDto } from './dto/update-episodio-dto';
import { episodio } from './entity/episodio.entity';
import { episodioService } from './episodio.service';

@Controller('paciente/:id/episodio')
export class episodioController {
  constructor(private readonly episodioServ: episodioService) {}

  @Post()
  async insert(@Body() nuevoEpisodio: CreateEpisodioDto): Promise<episodio> {
    return await this.episodioServ.addEpisodio(nuevoEpisodio);
  }
  @Get()
  async getAll() {
    return await this.episodioServ.getAllEpisodios();
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
