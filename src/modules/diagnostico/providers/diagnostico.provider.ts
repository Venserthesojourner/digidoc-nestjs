import { DataSource } from 'typeorm';
import { diagnostico } from '../entity/diagnostico.entity';

export const DiagnosticoProvider = [
  {
    provide: 'DIAGNOSTICO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(diagnostico),
    inject: ['DATA_SOURCE'],
  },
];
