import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { episodio } from './entity/episodio.entity';
import { paciente } from '../paciente/entity/paciente.entity';
import { episodioService } from './episodio.service';
import { EpisodioProviders } from './providers/episodio.provider';
import {
  episodioController,
  episodioNoPatientController,
} from './episodio.controller';
import { PacienteModule } from '../paciente/paciente.module';
import { PacienteProviders } from '../paciente/providers/paciente.providers';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([episodio, paciente]),
    PacienteModule,
  ],
  controllers: [episodioController, episodioNoPatientController],
  providers: [...EpisodioProviders, ...PacienteProviders, episodioService],
})
export class EpisodioModule {
  //
}
