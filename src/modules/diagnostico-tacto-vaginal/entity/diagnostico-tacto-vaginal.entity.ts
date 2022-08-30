import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum cuello {
  POSTERIOR = 'Posterior',
  CENTRAL = 'Central',
  ANTERIOR = 'Anterior',
}

export enum borramiento {
  FORMADO = 'Formado',
  SETENTA = 70,
  OCHENTA = 80,
  NOVENTA = 90,
  CIEN = 100,
}
export enum dilatacion {
  UNCM = 1,
  DOSCM = 2,
  TRESCM = 3,
  CUATROCM = 4,
  CINCOCM = 5,
  SEISCM = 6,
  SIETECM = 7,
  OCHOCM = 8,
  NUEVECM = 9,
  DIEZCM = 10,
}

@Entity({ name: 'tacto_vaginal' })
export class diagnosticoTactoVaginal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: cuello,
    default: null,
  })
  cuello: cuello;

  @Column({
    type: 'enum',
    enum: borramiento,
    default: null,
  })
  borramiento: borramiento;

  @Column({
    type: 'enum',
    enum: dilatacion,
    default: null,
  })
  dilatacion: dilatacion;
}
