import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';

// Antecentes: (CSP)
import { AntecedentesService } from './antecedentes.service';
import { AntecedentesProviders } from './providers/antecedentes.provider';
import { AntecedentesController } from './antecedentes.controller';

//Entities
import { antecedentesGinecobstetricos } from '../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity';
import { antecedentesMetrorragia } from '../antecedentes-metrorragia/entity/metrorragia.entity';
import { antecedentesVacunas } from '../antecedentes-vacunas/entity/vacunas.entity';
import { antecedentesPartos } from '../antecedentes-partos/entity/partos.entity';
import { antecedentesSerologias } from '../antecedentes-serologias/entity/serologia.entity';
import { antecedentes } from './entity/antecedentes.entity';

import { AntecedentesVacunasModule } from '../antecedentes-vacunas/vacunas.module';
import { AntecedentesPartosModule } from '../antecedentes-partos/antecedentes-partos.module';
import { AntecedentesSerologiaModule } from '../antecedentes-serologias/serologia.module';
import { AntecedentesGinecobstetricosModule } from '../antecedentes-ginecobstetricos/antecedentes-ginecobstetricos.module';
import { AntecedentesMetrorragiaModule } from '../antecedentes-metrorragia/antecedentes-metrorragia.module';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([
      antecedentes,
      antecedentesGinecobstetricos,
      antecedentesMetrorragia,
      antecedentesVacunas,
      antecedentesPartos,
      antecedentesSerologias,
    ]),
    AntecedentesGinecobstetricosModule,
    AntecedentesMetrorragiaModule,
    AntecedentesVacunasModule,
    AntecedentesPartosModule,
    AntecedentesSerologiaModule,
  ],
  controllers: [AntecedentesController],
  providers: [AntecedentesService, ...AntecedentesProviders],
})
export class AntecedentesModule {}
