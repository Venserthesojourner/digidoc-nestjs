import { EntityRepository, Repository } from 'typeorm';

import { paciente } from 'src/modules/paciente/entity/paciente.entity';

@EntityRepository(paciente)
export class PacienteRepository extends Repository<paciente> {}
