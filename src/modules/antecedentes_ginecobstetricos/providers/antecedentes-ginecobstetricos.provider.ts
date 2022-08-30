import { DataSource } from 'typeorm';
import { AntecedentesGinecobstetricos } from '../entity/antecedentes-ginecobstetricos.entity';

export const AntecedentesGinecobstetricosProviders = [
  {
    provide: 'ANTECEDENTES_GINECOBSTETRICOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AntecedentesGinecobstetricos),
    inject: ['DATA_SOURCE'],
  },
];
