import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { antecedentes } from '../../antecedentes/entity/antecedentes.entity';
import { paciente } from '../../paciente/entity/paciente.entity';

@Entity('vacunas')
export class antecedentesVacunas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  nombreVacuna: string;

  @Column({ name: 'posee', nullable: false, type: 'boolean', default: false })
  poseeVacuna: boolean;

  @ManyToOne(
    () => antecedentes,
    (Antecedentes: { paciente: paciente }) => Antecedentes.paciente,
  )
  @JoinColumn({ name: 'id_paciente' })
  paciente: paciente;
}
