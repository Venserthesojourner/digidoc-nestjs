import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { DiagnosticoFetoController } from './diagnostico-feto.controller';
import { DiagnosticoFetoService } from './diagnostico-feto.service';
import { diagnosticoFeto } from './entity/diagnostico-feto.entity';
import { DiagnosticoFetoProvider } from './providers/diagnostico-feto.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([diagnosticoFeto])],
  providers: [DiagnosticoFetoService, ...DiagnosticoFetoProvider],
  controllers: [DiagnosticoFetoController],
})
export class DiagnosticoFetoModule {}
