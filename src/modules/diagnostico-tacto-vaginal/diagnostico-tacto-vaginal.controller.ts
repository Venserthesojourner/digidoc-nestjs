import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DiagnosticoTactoVaginalService } from './diagnostico-tacto-vaginal-service';
import { CreateDiagnosticoTactoVaginalDto } from './dto/create-diagnostico-tacto-vaginal.dto';
import { UpdateDiagnosticoTactoVaginalDto } from './dto/update-diagnostico-tacto-vaginal.dto';

@Controller('diagnostico/tacto%20vaginal')
export class DiagnosticoTactiVaginalController {
  constructor(private readonly tactoVService: DiagnosticoTactoVaginalService) {}

  @Post()
  async create(@Body() nuevoTactoV: CreateDiagnosticoTactoVaginalDto) {
    return this.tactoVService.insertNewDiagnosticoTactoVaginal(nuevoTactoV);
  }
  @Get()
  async getAll() {
    return this.tactoVService.findEachDiagnosticoTactoVaginal();
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.tactoVService.findOneDiagnosticoTactoVaginal(id);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDataforDTV: UpdateDiagnosticoTactoVaginalDto,
  ) {
    return this.tactoVService.updateSingleDiagnosticoTactoVaginal(
      id,
      updateDataforDTV,
    );
  }
}
