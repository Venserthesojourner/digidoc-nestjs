import { DataSource } from 'typeorm';
import { antecedentesMetrorragia } from '../entity/metrorragia.entity';

export const AntecedentesMetrorragiaProviders = [
  {
    provide: 'ANTECEDENTES_METRORRAGIA_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(antecedentesMetrorragia),
    inject: ['DATA_SOURCE'],
  },
];
