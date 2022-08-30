import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { PacienteProviders } from './providers/paciente.providers';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CliDocumentoDigitalizado } from '../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { paciente } from './entity/paciente.entity';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([paciente, CliDocumentoDigitalizado]),
  ],
  controllers: [PacienteController],
  providers: [...PacienteProviders, PacienteService],
})
export class PacienteModule {}
