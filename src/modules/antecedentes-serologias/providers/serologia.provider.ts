import { DataSource } from 'typeorm';
import { antecedentesSerologias } from '../entity/serologia.entity';

export const SerologiasProviders = [
  {
    provide: 'SEROLOGIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(antecedentesSerologias),
    inject: ['DATA_SOURCE'],
  },
];
