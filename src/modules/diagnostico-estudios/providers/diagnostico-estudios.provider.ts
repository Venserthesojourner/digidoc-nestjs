import { DataSource } from 'typeorm';
import { diagnosticoEstudios } from '../entity/diagnostico-estudios.entity';

export const diagnosticoEstudiosProvider = [
  {
    provide: 'DIAGNOSTICO_ESTUDIOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(diagnosticoEstudios),
    inject: ['DATA_SOURCE'],
  },
];
