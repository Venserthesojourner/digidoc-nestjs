import { DataSource } from 'typeorm';
import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';

export const CliDocumentoDigitalizadoProviders = [
  {
    provide: 'CLI_DOCUMENTO_DIGITALIZADO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CliDocumentoDigitalizado),
    inject: ['DATA_SOURCE'],
  },
];
