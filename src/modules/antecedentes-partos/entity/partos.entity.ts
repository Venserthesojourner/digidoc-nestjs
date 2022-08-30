import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum tipo_parto {
  VAGINAL = 'Partos_Vaginales',
  CESAREA = 'Cesáreas',
  ABORTO = 'Abortos',
  ECTOPICOS = 'Embarazos Ectopicos',
}

@Entity({ name: 'partos' })
export class antecedentesPartos {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => paciente, (paciente) => paciente.documento)
  dniPaciente: string;

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
