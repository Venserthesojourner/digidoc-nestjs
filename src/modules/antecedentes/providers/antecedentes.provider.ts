import { DataSource } from 'typeorm';
import { antecedentes } from '../entity/antecedentes.entity';

export const AntecedentesProviders = [
  {
    provide: 'ANTECEDENTES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(antecedentes),
    inject: ['DATA_SOURCE'],
  },
];
