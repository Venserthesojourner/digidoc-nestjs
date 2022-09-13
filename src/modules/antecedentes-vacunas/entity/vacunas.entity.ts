import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/* Despues de todo esta clase no representa un antecedente si no mas bien un recurso,
de modo que lo ideal seria que este relacionado directamente al usuario en lugar de a los antecedentes*/
@Entity('vacuna')
export class antecedentesVacunas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  nombreVacuna: string;

  /* @Column({ name: 'posee', nullable: false, type: 'boolean', default: false })
  poseeVacuna?: boolean;

  @ManyToOne(
    () => antecedentes,
    (Antecedentes: { paciente: paciente }) => Antecedentes.paciente,
  )
  @JoinColumn({ name: 'id_paciente' })
  paciente?: paciente; */
}
