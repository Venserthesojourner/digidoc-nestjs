import { DataSource } from 'typeorm';
import { CliFinanciador } from 'src/modules/cli-financiador/entity/cli-financiador.entity';
export const CliFinanciadorProviders = [
  {
    provide: 'CLI_FINANCIADOR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CliFinanciador),
    inject: ['DATA_SOURCE'],
  },
];
