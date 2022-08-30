import { ChildEntity, JoinTable, OneToOne } from 'typeorm';
import { antecedentes } from '../../antecedentes/entity/antecedentes.entity';
import { diagnostico } from '../../diagnostico/entity/diagnostico.entity';
import { protocolo } from '../../protocolo/entity/protocolo.entity';

@ChildEntity('maternidad_ingreso')
export class protocoloMaternidadIngreso extends protocolo {
  // TODO: los datos que extiende de protocolo serian el ID del episodio, y el de maternidad (O en su defecto de la clase que determine el area donde se lleva a carbo el episodio)
  @OneToOne(() => antecedentes)
  @JoinTable({ name: 'antecedentes' })
  antecedentes: antecedentes;

  @OneToOne(() => diagnostico)
  @JoinTable({ name: 'diagnosticos' })
  diagnostico: diagnostico;
}
