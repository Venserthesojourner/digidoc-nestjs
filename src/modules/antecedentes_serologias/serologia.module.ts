import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { antecedentesSerologias } from '../antecedentes-serologias/entity/serologia.entity';
import { antecedentes } from '../antecedentes/entity/antecedentes.entity';
import { SerologiasProviders } from './providers/serologia.provider';
import { SerologiaController } from './serologia.controller';
import { AntecedentesSerologiaService } from './serologia.service';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([antecedentes, antecedentesSerologias]),
  ],
  controllers: [SerologiaController],
  providers: [AntecedentesSerologiaService, ...SerologiasProviders],
})
export class AntecedentesSerologiaModule {}
