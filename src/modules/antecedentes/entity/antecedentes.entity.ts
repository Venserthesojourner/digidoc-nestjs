import { antecedentesSerologias } from 'src/modules/antecedentes-serologias/entity/serologia.entity';
import { antecedentesVacunas } from 'src/modules/antecedentes-vacunas/entity/vacunas.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';

import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
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
export class antecedentes extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'idpaciente' })
  id: number;

  @Column({ name: 'descripcion' })
  descripcion: string;

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

  @OneToMany(() => antecedentesMetrorragia, (metrorragia) => metrorragia.id)
  @JoinColumn({ name: 'antecendentes_metrorragia_id' })
  metrorragia: antecedentesMetrorragia[];

  @OneToMany(
    () => antecedentesSerologias,
    (serologias) => serologias.antecedente,
  )
  serologia: antecedentesSerologias[];

  @OneToMany(() => antecedentesVacunas, (Vacunas) => Vacunas.id)
  vacunas: antecedentesVacunas[];

  @Column({ name: 'antecedentes_alergicos' })
  antecedentes_alergicos: string;

  @Column({ name: 'antecedentes_quirurgicos' })
  antecedentes_quirurgicos: string;

  @Column({ name: 'antecedentes_sociales' })
  antecedentes_sociales: string;

  @Column({ name: 'antecedentes_obstetricos' })
  antecedentes_obstetricos: string;

  @Column({ name: 'antecedentes_medicacion_actual' })
  antecedentes_medicacion_actual: string;
}
