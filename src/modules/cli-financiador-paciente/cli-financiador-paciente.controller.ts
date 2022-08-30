import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CliFinanciadorPacienteService } from './cli-financiador-paciente.service';
import { CreateCliFinanciadorPacienteDto } from './dto/create-cli-financiador-paciente.dto';
import { UpdateCliFinanciadorPacienteDto } from './dto/update-cli-financiador-paciente.dto';

@Controller('cli-financiador-paciente')
export class CliFinanciadorPacienteController {
  constructor(
    private readonly cliFinanciadorPacienteService: CliFinanciadorPacienteService,
  ) {}

  @Post()
  create(
    @Body() createCliFinanciadorPacienteDto: CreateCliFinanciadorPacienteDto,
  ) {
    return this.cliFinanciadorPacienteService.create(
      createCliFinanciadorPacienteDto,
    );
  }

  @Get()
  findAll() {
    return this.cliFinanciadorPacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliFinanciadorPacienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCliFinanciadorPacienteDto: UpdateCliFinanciadorPacienteDto,
  ) {
    return this.cliFinanciadorPacienteService.update(
      +id,
      updateCliFinanciadorPacienteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliFinanciadorPacienteService.remove(+id);
  }
}
