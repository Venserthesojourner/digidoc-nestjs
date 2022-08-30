import { DataSource } from 'typeorm';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

export const PacienteProviders = [
  {
    provide: 'PACIENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(paciente),
    inject: ['DATA_SOURCE'],
  },
];
