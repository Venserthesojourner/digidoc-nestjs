import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes_diagnostico_signos_vitales')
export class diagnosticoSignosVitales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'normal', default: false })
  normal: boolean;

  @Column({ name: 'detalle', type: 'varchar', length: 200 })
  detalle: string;

  @Column({ name: 'plan', type: 'varchar', length: 200 })
  plan: string;

  @Column({ name: 'observaciones', type: 'varchar', length: 200 })
  observaciones: string;
}
