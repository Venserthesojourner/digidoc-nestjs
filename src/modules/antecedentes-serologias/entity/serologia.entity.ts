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
  CHAGAS = 'Chagas',
  HBV = 'Hepatitis B',
}

@Entity('serologias')
export class antecedentesSerologias extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enumName: 'tipo_serologia',
    enum: tipo_serologia,
    type: 'enum',
  })
  tipoSerologia: tipo_serologia;

  @Column({ name: 'estado', default: false })
  estado: boolean;

  @ManyToMany(() => antecedentes /* (antecedentes) => antecedentes.serologia */)
  antecedente: antecedentes[];
}
