import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AntecedentesGinecobstetricosService } from './antecedentesGinecobstetricos.service';
import { AntecedentesGinecobstetricosProviders } from './providers/antecedentes-ginecobstetricos.provider';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AntecedentesGinecobstetricosModule],
  providers: [
    AntecedentesGinecobstetricosService,
    ...AntecedentesGinecobstetricosProviders,
  ],
})
export class AntecedentesGinecobstetricosModule {}
