import { antecedentesPartos } from 'src/modules/antecedentes-partos/entity/partos.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum habitos_toxicos_periodo {
  PRIMER_SEMESTRE = 'Primer Semestre',
  SEGUNDO_SEMESTRE = 'Segundo Semestre',
  TERCER_SEMESTRE = 'Tercer Semestre',
}

@Entity({ name: 'pacientes_antecedentes_ginecobstetricos' })
export class antecedentesGinecobstetricos extends BaseEntity {
  @PrimaryGeneratedColumn()
  idPaciente: number;

  @ManyToOne(() => paciente, (paciente) => paciente.documento)
  dni_paciente: string;

  @Column({ name: 'fecha_probable_parto', nullable: false, type: 'date' })
  fecha_probable_parto: Date;

  @Column({ name: 'habitos_toxicos', type: 'boolean', default: false })
  habitos_toxicos: boolean;

  @Column({
    enumName: 'habitos_toxicos_periodo',
    type: 'enum',
    default: habitos_toxicos_periodo.PRIMER_SEMESTRE,
  })
  habitos_toxicos_periodo: habitos_toxicos_periodo;

  /* @Column({
    name: 'tiene_alergias',
    nullable: false,
    type: 'boolean',
    default: false,
  })
  tiene_alergias: boolean;

  @Column({
    name: 'alergias_declaradas',
    nullable: true,
    type: 'varchar',
    length: 200,
  })
  alergias_declaradas: string; */

  @ManyToMany(() => antecedentesPartos)
  @JoinTable({ name: 'partos' })
  partos: antecedentesPartos[];
}
