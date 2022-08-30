import { Module } from '@nestjs/common';
import { CliDocumentoDigitalizadoAdjuntoService } from './cli-documento-digitalizado-adjunto.service';
import { CliDocumentoDigitalizadoAdjuntoController } from './cli-documento-digitalizado-adjunto.controller';
import { CliDocumentoDigitalizadoAdjuntoProviders } from './providers/cli-documento-digitalizado-adjunto.providers';
import { DatabaseModule } from 'src/database/database.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CliDocumentoDigitalizado } from '../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { CliDocumentoDigitalizadoAdjunto } from './entity/cli-documento-digitalizado-adjunto.entity';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([
      CliDocumentoDigitalizado,
      CliDocumentoDigitalizadoAdjunto,
    ]),
  ],
  controllers: [CliDocumentoDigitalizadoAdjuntoController],
  providers: [
    ...CliDocumentoDigitalizadoAdjuntoProviders,
    CliDocumentoDigitalizadoAdjuntoService,
  ],
  exports: [CliDocumentoDigitalizadoAdjuntoService],
})
export class CliDocumentoDigitalizadoAdjuntoModule {}
