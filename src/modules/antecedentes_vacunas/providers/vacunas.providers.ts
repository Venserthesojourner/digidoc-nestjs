import { DataSource } from 'typeorm';
import { AntecedentesVacunas } from '../entity/vacunas.entity';
//import { AntecedentesVacunasRepository } from '../repository/vacunas.repository';

export const AntecedentesVacunasProviders = [
  {
    provide: 'ANTECEDENTES_VACUNAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AntecedentesVacunas),
    inject: ['DATA_SOURCE'],
  },
];
