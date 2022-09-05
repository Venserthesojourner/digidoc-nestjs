import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum tipo_serologia {
  HIV = 'HIV',
  TOXOPLASMOSIS = 'Toxoplasmosis',
  CHAGAS = 'Mal de Chagas',
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

  // Many to One (Por que un antecedente tiene la coleccion de antecedentes_serologia)
  @ManyToOne(() => antecedentes, (antecedentes) => antecedentes.serologia)
  @JoinColumn({ name: 'antecedentes_id' })
  antecedente: antecedentes;
}
