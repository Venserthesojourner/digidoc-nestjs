import { DataSource } from 'typeorm';
import { antecedentesGinecobstetricos } from '../entity/antecedentes-ginecobstetricos.entity';

export const AntecedentesGinecobstetricosProviders = [
  {
    provide: 'ANTECEDENTES_GINECOBSTETRICOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(antecedentesGinecobstetricos),
    inject: ['DATA_SOURCE'],
  },
];
