import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';

export enum sexo {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity({ name: 'pacientes' })
export class paciente {
  @PrimaryGeneratedColumn({ name: 'idpaciente' })
  id: number;

  @Column({ name: 'nombres', nullable: true, type: 'varchar', length: 100 })
  nombres: string;

  @Column({ name: 'apellido', nullable: true, type: 'varchar', length: 100 })
  apellidos: string;

  @Column({ name: 'documento', nullable: true, type: 'varchar', length: 11 })
  documento: string;

  @Column({
    name: 'tipo_documento',
    nullable: true,
    type: 'varchar',
    length: 3,
  })
  tipoDocumento: string;

  @Column({ name: 'telefono', nullable: true, type: 'varchar', length: 11 })
  telefonoFijo: string;

  @Column({ name: 'telefono', nullable: true, type: 'varchar', length: 11 })
  telefonoMovil: string;

  @Column({ name: 'correo', nullable: true, type: 'varchar', length: 11 })
  email: string;

  @Column({ type: 'enum', enum: sexo, enumName: 'sexo', default: sexo.MALE })
  sexo: sexo;

  @OneToMany(
    () => CliDocumentoDigitalizado,
    (cliDocumentoDigitalizado) => cliDocumentoDigitalizado.cliPaciente,
  )
  cliDocumentoDigitalizado: CliDocumentoDigitalizado[];

  @Column({ name: 'fecha_nacimiento' })
  fecha_nacimiento: Date;
  direccion: any;
  fedNacion: any;
  activeFedNacion: boolean;
}
