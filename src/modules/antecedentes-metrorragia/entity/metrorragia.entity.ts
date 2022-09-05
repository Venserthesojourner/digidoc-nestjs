import { antecedentes } from 'src/modules/antecedentes/entity/antecedentes.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes_antecedentes_metrorragia')
export class antecedentesMetrorragia {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => antecedentes, (idAntecedente) => idAntecedente.id)
  idAntedecente: antecedentes;

  @Column({ name: 'presente', type: 'boolean' })
  presente: boolean;

  @Column({ name: 'tiempo_evolucion' })
  tiempoEvolucion: number;

  @Column({ name: 'cantidad' })
  cantidad: number;

  @Column({ name: 'auscultacion' })
  auscultacion: number;

  @Column({ name: 'dinamica_uterina' })
  dinamicaUterina: string;

  @Column({ name: 'tono_uterino' })
  tonoUterino: string;
}
