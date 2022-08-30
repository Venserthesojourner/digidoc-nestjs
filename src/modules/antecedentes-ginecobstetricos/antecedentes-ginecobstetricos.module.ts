import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AntecedentesGinecobstetricosService } from './antecedentesGinecobstetricos.service';
import { AntecedentesGinecobstetricosProviders } from './providers/antecedentes-ginecobstetricos.provider';
import { AntecedentesGinecobstetricosController } from './antecedentesGinecobstetricos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { antecedentesGinecobstetricos } from './entity/antecedentes-ginecobstetricos.entity';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([antecedentesGinecobstetricos]),
  ],
  controllers: [AntecedentesGinecobstetricosController],
  providers: [
    AntecedentesGinecobstetricosService,
    ...AntecedentesGinecobstetricosProviders,
  ],
})
export class AntecedentesGinecobstetricosModule {}
