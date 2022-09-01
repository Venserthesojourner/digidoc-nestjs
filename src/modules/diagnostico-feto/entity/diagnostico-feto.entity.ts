import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum presentacion {
  CEFALICA = 'Cefálica',
  PODALICA = 'Podálica',
  TRANSVERSA = 'Transversa',
}

export enum plano {
  INSINUADA = 'Insinuada',
  MOVIL = 'Movil',
  ENCAJADA = 'Encajada',
}

export enum liquidoAmniotico {
  CLARO = 'Claro',
  MECONIAL = 'Meconial',
  FLUIDO = 'Fluido',
  ESPESO = 'Espeso',
}

@Entity('paciente_diagnostico_feto')
export class diagnosticoFeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enumName: 'presentacion',
    type: 'enum',
    default: null,
  })
  presentacion: presentacion;

  @Column({
    name: 'posicion',
  })
  posicion: string;

  @Column({
    name: 'membranas_ovulares',
  })
  membranasOvulares: string;

  @Column({
    enumName: 'plano',
    type: 'enum',
    default: null,
  })
  plano: plano;

  @Column({ enumName: 'liquido_amniotico', type: 'enum', default: null })
  liquidoAmniotico: liquidoAmniotico;
}
