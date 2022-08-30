import { DataSource } from 'typeorm';
import { CliDocumentoDigitalizadoAdjunto } from 'src/modules/cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';

export const CliDocumentoDigitalizadoAdjuntoProviders = [
  {
    provide: 'CLI_DOCUMENTO_DIGITALIZADO_ADJUNTO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CliDocumentoDigitalizadoAdjunto),
    inject: ['DATA_SOURCE'],
  },
];
