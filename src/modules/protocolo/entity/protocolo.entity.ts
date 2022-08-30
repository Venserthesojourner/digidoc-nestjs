import { Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';

@Entity('protocolo')
@TableInheritance({ column: { type: 'varchar', name: 'nombre_protocolo' } })
export abstract class protocolo {
  //TODO: Agregar los atributos de protocolo para que sea la clase padre de otras como maternidad_protocolo_ingreso, por ej

  @PrimaryGeneratedColumn()
  id: number;
}
