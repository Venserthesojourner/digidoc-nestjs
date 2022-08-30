import { DataSource } from 'typeorm';
import { AntecedentesSerologias } from '../entity/serologia.entity';

export const SerologiasProviders = [
  {
    provide: 'SEROLOGIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AntecedentesSerologias),
    inject: ['DATA_SOURCE'],
  },
];
