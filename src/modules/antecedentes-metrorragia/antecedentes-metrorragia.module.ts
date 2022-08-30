import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AntecedentesMetrorragiaController } from './antecedentes-metrorragia.controller';
import { AntecedentesMetrorragiaService } from './antecedentes-metrorragia.service';
import { AntecedentesMetrorragiaProviders } from './providers/antecedentes-metrorragia.providers';

@Module({
  imports: [HttpModule, DatabaseModule],

  controllers: [AntecedentesMetrorragiaController],
  providers: [
    AntecedentesMetrorragiaService,
    ...AntecedentesMetrorragiaProviders,
  ],
})
export class AntecedentesMetrorragiaModule {}
