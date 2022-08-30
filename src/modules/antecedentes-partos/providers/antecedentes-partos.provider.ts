import { DataSource } from 'typeorm';
import { antecedentesPartos } from '../entity/partos.entity';

export const AntecedentesPartosProvider = [
  {
    provide: 'ANTECEDENTES_PARTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(antecedentesPartos),
    inject: ['DATA_SOURCE'],
  },
];
