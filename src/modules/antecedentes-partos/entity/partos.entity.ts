import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum tipo_parto {
  VAGINAL = 'Partos_Vaginales',
  CESAREA = 'Cesáreas',
  ABORTO = 'Abortos',
  ECTOPICOS = 'Embarazos Ectopicos',
}

@Entity({ name: 'pacientes_antecedentes_partos' })
export class antecedentesPartos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => paciente, (paciente) => paciente.documento)
  paciente: paciente;

  @Column({
    type: 'enum',
    enum: tipo_parto,
    enumName: 'tipo_parto',
    default: tipo_parto.VAGINAL,
  })
  tipoParto: tipo_parto;

  @Column({ name: 'cantidad' })
  cantidad: number;
}
