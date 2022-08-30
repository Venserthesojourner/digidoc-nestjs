import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { AntecedentesVacunasProviders } from './providers/vacunas.providers';
//import { AntecedentesVacunasRepository } from './repository/vacunas.repository';
import { AntecedentesVacunasController } from './vacunas.controller';
import { AntecedentesVacunasService } from './vacunas.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AntecedentesVacunasController],
  providers: [...AntecedentesVacunasProviders, AntecedentesVacunasService],
})
export class AntecedentesVacunasModule {}
