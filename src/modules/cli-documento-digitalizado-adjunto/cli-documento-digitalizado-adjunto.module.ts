import { forwardRef, Module } from '@nestjs/common';
import { CliDocumentoDigitalizadoAdjuntoService } from './cli-documento-digitalizado-adjunto.service';
import { CliDocumentoDigitalizadoAdjuntoController } from './cli-documento-digitalizado-adjunto.controller';
import { CliDocumentoDigitalizadoAdjuntoProviders } from './providers/cli-documento-digitalizado-adjunto.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CliDocumentoDigitalizado } from '../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { CliDocumentoDigitalizadoAdjunto } from './entity/cli-documento-digitalizado-adjunto.entity';
import { CliDocumentoDigitalizadoModule } from '../cli-documento-digitalizado/cli-documento-digitalizado.module';
import { episodio } from '../episodio/entity/episodio.entity';
import { episodioService } from '../episodio/episodio.service';
import { PacienteService } from '../paciente/paciente.service';
import { paciente } from '../paciente/entity/paciente.entity';
import { PacienteModule } from '../paciente/paciente.module';
import { EpisodioModule } from '../episodio/episodio.module';
import { PacienteProviders } from '../paciente/providers/paciente.providers';
import { EpisodioProviders } from '../episodio/providers/episodio.provider';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([
      CliDocumentoDigitalizadoAdjunto,
      CliDocumentoDigitalizado,
      paciente,
      episodio,
    ]),
    forwardRef(() => CliDocumentoDigitalizadoModule),
    forwardRef(() => PacienteModule),
    forwardRef(() => EpisodioModule),
  ],
  controllers: [CliDocumentoDigitalizadoAdjuntoController],
  providers: [
    ...CliDocumentoDigitalizadoAdjuntoProviders,
    ...EpisodioProviders,
    ...PacienteProviders,
    CliDocumentoDigitalizadoAdjuntoService,
    episodioService,
    PacienteService,
  ],
  exports: [CliDocumentoDigitalizadoAdjuntoService],
})
export class CliDocumentoDigitalizadoAdjuntoModule {
  //
}
