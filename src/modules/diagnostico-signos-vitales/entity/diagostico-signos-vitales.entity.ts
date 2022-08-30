import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('signos_vitales')
export class diagnosticoSignosVitales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  normal: boolean;

  @Column()
  detalle: string;

  @Column()
  plan: string;

  @Column()
  observaciones: string;
}
