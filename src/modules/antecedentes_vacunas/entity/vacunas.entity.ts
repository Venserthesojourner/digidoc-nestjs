import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  /* JoinColumn,
  ManyToOne, */
  PrimaryGeneratedColumn,
} from 'typeorm';
import { antecedentes } from '../../antecedentes/entity/antecedentes.entity';
import { paciente } from '../../paciente/entity/paciente.entity';

@Entity('antecedentes_vacunas')
export class AntecedentesVacunas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre_vacuna',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  nombreVacuna: string;

  @Column({ name: 'posee', nullable: false, type: 'boolean', default: false })
  poseeVacuna: boolean;

  @ManyToOne(
    () => antecedentes,
    (antecedentes: { paciente: paciente }) => antecedentes.paciente,
  )
  @JoinColumn({ name: 'id_paciente' })
  paciente: paciente;
}
