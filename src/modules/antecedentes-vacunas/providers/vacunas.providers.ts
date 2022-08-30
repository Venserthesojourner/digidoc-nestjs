import { DataSource } from 'typeorm';
import { AntecedentesVacunasRepository } from '../repository/vacunas.repository';

export const AntecedentesVacunasProviders = [
  {
    provide: 'ANTECEDENTES_VACUNAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AntecedentesVacunasRepository),
    inject: ['DATA_SOURCE'],
  },
];
