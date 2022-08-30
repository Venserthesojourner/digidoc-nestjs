import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { diagnosticoEstudiosController } from './diagnostico-estudios.controller';
import { diagnosticoEstudiosService } from './diagnostico-estudios.service';
import { diagnosticoEstudiosProvider } from './providers/diagnostico-estudios.provider';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [diagnosticoEstudiosController],
  providers: [diagnosticoEstudiosService, ...diagnosticoEstudiosProvider],
})
export class DiagnosticoEstudiosModule {}
