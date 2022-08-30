import { Column, Entity, PrimaryColumn } from 'typeorm';

export type tipo_parto =
  | 'Partos Vaginales'
  | 'Cesáreas'
  | 'Abortos'
  | 'Embarazos Ectopicos';

@Entity({ name: 'partos' })
export class AntedecentesPartos {
  @PrimaryColumn('documento_paciente')
  dni_paciente: number;

  @Column('tipo_parto')
  tipo_parto: string;

  @Column('cantidad')
  cantidad: number;
}
