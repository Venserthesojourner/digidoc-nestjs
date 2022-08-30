import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('metrorragia')
export class antecedentesMetrorragia {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => antecedentes, (idAntecedente) => idAntecedente.id)
  idAntedecente: antecedentes;

  @Column({ name: 'presente', type: 'boolean' })
  presente: boolean;

  @Column({ name: 'tiempo_evolucion' })
  tiempoEvolucion: number;

  @Column({ name: 'cantidad' })
  // Con un select
  cantidad: number;

  @Column({ name: 'auscultacion' })
  auscultacion: number;

  @Column({ name: 'dinamica_uterina' })
  dinamicaUterina: string;

  @Column({ name: 'tono_uterino' })
  // Con un select
  tonoUterino: string;
}
