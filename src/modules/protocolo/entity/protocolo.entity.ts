import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity('protocolo')
@TableInheritance({ column: { type: 'varchar', name: 'nombre_protocolo' } })
export abstract class protocolo {
  //TODO: Agregar los atributos de protocolo para que sea la clase padre de otras como maternidad_protocolo_ingreso, por ej

  @PrimaryGeneratedColumn()
  id: number;

  //En realidad este no va por que la tabla nunca se referencia por si sola
  @Column({ name: 'nombre_protocolo' })
  nombreProtocolo: string;
}
