import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum tipo_serologia {
  HIV = 'HIV',
  TOXOPLASMOSIS = 'Toxoplasmosis',
  MAL_CHAGAS = 'Chagas',
  VHB = 'Hepatitis B',
}

@Entity('serologias')
export class AntecedentesSerologias extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enumName: 'tipo_serologia',
    type: 'enum',
    enum: tipo_serologia,
  })
  tipoSerologia: tipo_serologia;

  @Column({ name: 'estado', default: false })
  estado: boolean;

  @ManyToMany(() => antecedentes, (antecedente) => antecedente.serologia)
  antecedente: antecedentes[];
}
