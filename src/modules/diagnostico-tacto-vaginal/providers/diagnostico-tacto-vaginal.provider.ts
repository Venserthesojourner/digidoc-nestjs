import { DataSource } from 'typeorm';
import { diagnosticoTactoVaginal } from '../entity/diagnostico-tacto-vaginal.entity';

export const DiagnosticoTactoVaginalProvider = [
  {
    provide: 'DIAGNOSTICO_TACTO_VAGINAL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(diagnosticoTactoVaginal),
    inject: ['DATA_SOURCE'],
  },
];
