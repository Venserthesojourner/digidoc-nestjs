import { DataSource } from 'typeorm';
import { CliFinanciadorPaciente } from 'src/modules/cli-financiador-paciente/entity/cli-financiador-paciente.entity';
export const CliFinanciadorPacienteProviders = [
  {
    provide: 'CLI_FINANCIADOR_PACIENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CliFinanciadorPaciente),
    inject: ['DATA_SOURCE'],
  },
];
