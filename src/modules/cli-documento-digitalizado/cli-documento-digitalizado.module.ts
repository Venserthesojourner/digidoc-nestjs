import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CliDocumentoDigitalizadoService } from './cli-documento-digitalizado.service';
import { CliDocumentoDigitalizadoController } from './cli-documento-digitalizado.controller';
import { CliDocumentoDigitalizadoProviders } from './providers/cli-documento-digitalizado.providers';
import { HttpModule } from '@nestjs/axios';
import { CliDocumentoDigitalizadoAdjuntoModule } from '../cli-documento-digitalizado-adjunto/cli-documento-digitalizado-adjunto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CliDocumentoDigitalizado } from './entity/cli-documento-digitalizado.entity';
import { CliDocumentoDigitalizadoAdjunto } from '../cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    CliDocumentoDigitalizadoAdjuntoModule,
    TypeOrmModule.forFeature([
      CliDocumentoDigitalizado,
      CliDocumentoDigitalizadoAdjunto,
    ]),
  ],
  controllers: [CliDocumentoDigitalizadoController],
  providers: [
    ...CliDocumentoDigitalizadoProviders,
    CliDocumentoDigitalizadoService,
  ],
})
export class CliDocumentoDigitalizadoModule {}
