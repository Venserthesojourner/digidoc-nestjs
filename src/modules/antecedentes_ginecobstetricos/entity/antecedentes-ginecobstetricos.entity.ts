import { AntedecentesPartos } from 'src/modules/antecedentes_partos/entity/partos.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

export type habitos_toxicos =
  | 'Primer Semestre'
  | 'Segundo Semestre'
  | 'Tercer Semestre';

@Entity({ name: 'pacientes_antecedentes_ginecobstetricos' })
export class AntecedentesGinecobstetricos {
  @PrimaryColumn({ name: 'documento_paciente' })
  documento_paciente: number;

  @Column({ name: 'fecha_probable_parto', nullable: false, type: 'date' })
  fecha_probable_parto: Date;

  @Column({ name: 'habitos_toxicos', type: 'boolean', default: false })
  habitos_toxicos: boolean;

  @Column({
    name: 'habitos_toxicos_periodo',
    type: 'set',
    enum: ['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre'],
    default: [],
  })
  habitos_toxicos_periodo?: string;

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
    type: 'string',
    length: 200,
  })
  alergias_declaras?: string;

  @ManyToMany(() => AntedecentesPartos)
  @JoinTable()
  partos: AntedecentesPartos[];
}
