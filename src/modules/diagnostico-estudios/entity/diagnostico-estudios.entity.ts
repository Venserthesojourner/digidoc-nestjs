import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes_diagnosticos_estudios')
export class diagnosticoEstudios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  resultado: boolean;

  @Column()
  observaciones: string;
}
