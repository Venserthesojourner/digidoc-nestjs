import { antecedentesPartos } from 'src/modules/antecedentes-partos/entity/partos.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';

export enum habitos_toxicos_periodo {
  PRIMER_SEMESTRE = 'Primer Semestre',
  SEGUNDO_SEMESTRE = 'Segundo Semestre',
  TERCER_SEMESTRE = 'Tercer Semestre',
}

@Entity({ name: 'pacientes_antecedentes_ginecobstetricos' })
export class antecedentesGinecobstetricos extends BaseEntity {
  @PrimaryColumn({ name: 'documento_paciente' })
  documento_paciente: number;

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

  @Column({
    name: 'has_alergies',
    nullable: false,
    type: 'boolean',
    default: false,
  })
  tiene_alergias: boolean;

  @Column({
    name: 'declared_alergies',
    nullable: true,
    type: 'varchar',
    length: 200,
  })
  alergias_declaradas: string;

  @ManyToMany(() => antecedentesPartos)
  @JoinTable()
  partos: antecedentesPartos[];
}
