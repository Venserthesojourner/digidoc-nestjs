import { EntityRepository, Repository } from 'typeorm';
import { CliFinanciadorPaciente } from 'src/modules/cli-financiador-paciente/entity/cli-financiador-paciente.entity';

@EntityRepository(CliFinanciadorPaciente)
export class CliFinanciadorPacienteRepository extends Repository<CliFinanciadorPaciente> {}
