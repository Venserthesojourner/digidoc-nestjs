import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { DiagnosticoSignosVitalesController } from './diagnostico-signos-vitales.controller';
import { DiagnosticoSignosVitalesService } from './diangostico-signos-vitales.service';
import { diagnosticoSignosVitales } from './entity/diagostico-signos-vitales.entity';
import { DiagnosticoSignosVitalesProvider } from './providers/diagnostico-signos-vitales.provider';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([diagnosticoSignosVitales]),
  ],
  providers: [
    DiagnosticoSignosVitalesService,
    ...DiagnosticoSignosVitalesProvider,
  ],
  controllers: [DiagnosticoSignosVitalesController],
})
export class DiagnosticoSignosVitalesModule {}
