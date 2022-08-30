import { DataSource } from 'typeorm';
import { diagnosticoSignosVitales } from '../entity/diagostico-signos-vitales.entity';

export const DiagnosticoSignosVitalesProvider = [
  {
    provide: 'DIAGNOSTICO_SIGNOS_VITALES_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(diagnosticoSignosVitales),
    inject: ['DATA_SOURCE'],
  },
];
