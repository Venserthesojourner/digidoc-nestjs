import { antecedentesSerologias } from 'src/modules/antecedentes-serologias/entity/serologia.entity';
import { antecedentesVacunas } from 'src/modules/antecedentes-vacunas/entity/vacunas.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { antecedentesGinecobstetricos } from '../../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity';
import { antecedentesMetrorragia } from '../../antecedentes-metrorragia/entity/metrorragia.entity';

export enum grupoSanguineo {
  CERO = '0',
  A = 'A',
  B = 'B',
  AB = 'AB',
}

@Entity('antecedentes')
@Index('paciente_antecedentes', ['id', 'paciente'])
export class antecedentes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => paciente, (paciente) => paciente.id)
  @JoinColumn({ name: 'paciente_id' })
  paciente: paciente;

  @Column({
    enumName: 'grupo_sanguineo',
    type: 'enum',
    default: grupoSanguineo.CERO,
  })
  grupo_sanguineo: grupoSanguineo;

  @OneToOne(
    () => antecedentesGinecobstetricos,
    (antecedentes_ginecobstertricos) =>
      antecedentes_ginecobstertricos.idPaciente,
  )
  @JoinColumn({ name: 'antecedente_ginecobstetrico_id' })
  antecedentes_ginecobstetricos: antecedentesGinecobstetricos;

  @OneToOne(() => antecedentesMetrorragia, (metrorragia) => metrorragia.id)
  @JoinColumn({ name: 'metrorragia' })
  metrorragia: antecedentesMetrorragia;

  @ManyToMany(
    () => antecedentesSerologias,
    (serologias) => serologias.antecedente,
  )
  @JoinColumn({ name: 'serologias' })
  serologia: antecedentesSerologias[];

  @OneToMany(() => antecedentesVacunas, (Vacunas: { id: number }) => Vacunas.id)
  vacunas: antecedentesVacunas;

  @Column({ name: 'antecedentes_alergicos' })
  antecedentes_alergicos: string;

  @Column({ name: 'antecedentes_quirurgicos' })
  antecedentes_quirurgicos: string;

  @Column({ name: 'antecedentes_socialess' })
  antecedentes_sociales: string;

  @Column({ name: 'antecedentes_alergicos' })
  antecedentes_obstetricos: string;

  @Column({ name: 'antecedentes_medicacion_actual' })
  antecedentes_medicacion_actual: string;
}
