import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'financiacion' })
export class CliFinanciador {
  @PrimaryGeneratedColumn({ name: 'idfinanciacion' })
  id: number;

  @Column({ name: 'nombre', nullable: true, type: 'varchar', length: 100 })
  nombre: string;

  @Column({ name: 'cuit', nullable: true, type: 'varchar', length: 15 })
  cuit: string;

  @Column({ name: 'activado', nullable: false, type: 'int', default: 1 })
  activado: number;
}
