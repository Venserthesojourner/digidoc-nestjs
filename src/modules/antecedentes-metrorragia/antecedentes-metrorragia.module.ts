import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { antecedentes } from '../antecedentes/entity/antecedentes.entity';
import { AntecedentesMetrorragiaController } from './antecedentes-metrorragia.controller';
import { AntecedentesMetrorragiaService } from './antecedentes-metrorragia.service';
import { antecedentesMetrorragia } from './entity/metrorragia.entity';
import { AntecedentesMetrorragiaProviders } from './providers/antecedentes-metrorragia.providers';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([antecedentesMetrorragia, antecedentes]),
  ],

  controllers: [AntecedentesMetrorragiaController],
  providers: [
    AntecedentesMetrorragiaService,
    ...AntecedentesMetrorragiaProviders,
  ],
})
export class AntecedentesMetrorragiaModule {}
