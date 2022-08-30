import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { CliFinanciador } from 'src/modules/cli-financiador/entity/cli-financiador.entity';

@Entity({ name: 'obra_social' })
export class CliFinanciadorPaciente {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => CliFinanciador, (cliFinanciador) => cliFinanciador.id)
  @JoinColumn({ name: 'idobra_social' })
  cliFinanciador: CliFinanciador;

  @OneToOne(() => paciente, (paciente) => paciente.id)
  @JoinColumn({ name: 'idpaciente' })
  cliPaciente: paciente;
}
