import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { episodio } from './entity/episodio.entity';
import { paciente } from '../paciente/entity/paciente.entity';
import { episodioService } from './episodio.service';
import { EpisodioProviders } from './providers/episodio.provider';
import { episodioController } from './episodio.controller';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([episodio, paciente]),
  ],
  controllers: [episodioController],
  providers: [...EpisodioProviders, episodioService],
})
export class EpisodioModule {}
