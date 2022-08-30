import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AntecedentesSerologiaService } from './serologia.service';
//import { CreateAntecedentesSerologiasDto } from './dto/create-antecedentes-serologias.dto';

@Controller('serologia')
export class SerologiaController {
  constructor(
    private readonly antecedentesSerologiaService: AntecedentesSerologiaService,
  ) {}

  @Get('antecedentes/serologias')
  getAll() {
    return 'Mockup';
  }
  @Get('antecedentes/serologias/:id')
  getOne() {
    return 'Mockup';
  }

  @Post('antecedentes/serologias')
  addOne() {
    return 'Mockup';
  }

  @Put('antecedentes/serologias/:id')
  updateOne() {
    return 'Mockup';
  }

  @Delete('antecedentes/serologias/:id')
  unRecordOne() {
    return 'Mockup';
  }
}
