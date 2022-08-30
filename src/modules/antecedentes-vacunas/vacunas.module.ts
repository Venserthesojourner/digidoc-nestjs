import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/database/database.module';
import { antecedentesVacunas } from './entity/vacunas.entity';
import { AntecedentesVacunasProviders } from './providers/vacunas.providers';

import { AntecedentesVacunasController } from './vacunas.controller';
import { AntecedentesVacunasService } from './vacunas.service';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([antecedentesVacunas]),
  ],
  controllers: [AntecedentesVacunasController],
  providers: [...AntecedentesVacunasProviders, AntecedentesVacunasService],
})
export class AntecedentesVacunasModule {}
