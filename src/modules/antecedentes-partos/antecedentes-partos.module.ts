import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { AntecedentesPartosController } from './antecedentes-partos.controller';
import { AntecedentesPartosService } from './antecedentes-partos.service';
import { antecedentesPartos } from './entity/partos.entity';
import { AntecedentesPartosProvider } from './providers/antecedentes-partos.provider';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([antecedentesPartos]),
  ],
  controllers: [AntecedentesPartosController],
  providers: [AntecedentesPartosService, ...AntecedentesPartosProvider],
})
export class AntecedentesPartosModule {}
