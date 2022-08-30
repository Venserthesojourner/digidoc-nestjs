import { DataSource } from 'typeorm';
import { diagnosticoFeto } from '../entity/diagnostico-feto.entity';

export const DiagnosticoFetoProvider = [
  {
    provide: 'DIAGNOSTICO_FETO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(diagnosticoFeto),
    inject: ['DATA_SOURCE'],
  },
];
