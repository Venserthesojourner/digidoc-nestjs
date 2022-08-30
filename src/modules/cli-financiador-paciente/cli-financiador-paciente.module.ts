import { Module } from '@nestjs/common';
import { CliFinanciadorPacienteService } from './cli-financiador-paciente.service';
import { CliFinanciadorPacienteController } from './cli-financiador-paciente.controller';
import { CliFinanciadorPacienteProviders } from './providers/cli-financiador-paciente.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [CliFinanciadorPacienteController],
  providers: [
    ...CliFinanciadorPacienteProviders,
    CliFinanciadorPacienteService,
  ],
})
export class CliFinanciadorPacienteModule {}
