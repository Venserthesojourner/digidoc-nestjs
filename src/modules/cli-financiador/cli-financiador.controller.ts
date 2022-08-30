import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CliFinanciadorService } from './cli-financiador.service';
import { CreateCliFinanciadorDto } from './dto/create-cli-financiador.dto';
import { UpdateCliFinanciadorDto } from './dto/update-cli-financiador.dto';

@Controller('cli-financiador')
export class CliFinanciadorController {
  constructor(private readonly cliFinanciadorService: CliFinanciadorService) {}

  @Post()
  create(@Body() createCliFinanciadorDto: CreateCliFinanciadorDto) {
    return this.cliFinanciadorService.create(createCliFinanciadorDto);
  }

  @Get()
  findAll() {
    return this.cliFinanciadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliFinanciadorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCliFinanciadorDto: UpdateCliFinanciadorDto,
  ) {
    return this.cliFinanciadorService.update(+id, updateCliFinanciadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliFinanciadorService.remove(+id);
  }
}
