import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AntecedentesService } from './antecedentes.service';
import { CreateAntecedenteDto } from './dto/create-antecedente.dto';
import { UpdateAntecedenteDto } from './dto/update-antecedente.dto';
import { antecedentes } from './entity/antecedentes.entity';

@Controller('antecedentes')
export class AntecedentesController {
  constructor(private readonly antecedentesService: AntecedentesService) {}

  @Post()
  async create(@Body() payload: CreateAntecedenteDto): Promise<antecedentes> {
    return await this.antecedentesService.create(payload);
  }

  @Get()
  async findAll(): Promise<antecedentes[]> {
    return this.antecedentesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<antecedentes> {
    return this.antecedentesService.findOne(id);
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAntecedenteDto: UpdateAntecedenteDto,
  ): Promise<antecedentes> {
    return this.antecedentesService.update({ id, updateAntecedenteDto });
  }
}
