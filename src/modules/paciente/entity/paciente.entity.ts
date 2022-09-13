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

  @Column({ name: 'nombre1', nullable: true, type: 'varchar', length: 100 })
  primerNombre: string;

  @Column({ name: 'apellido1', nullable: true, type: 'varchar', length: 100 })
  primerApellido: string;

  @Column({ name: 'nombre2', nullable: true, type: 'varchar', length: 100 })
  segundoNombre: string;

  @Column({ name: 'apellido2', nullable: true, type: 'varchar', length: 100 })
  segundoApellido: string;

  @Column({ name: 'documento', nullable: true, type: 'varchar', length: 11 })
  documento: string;

  @Column({
    name: 'tipo_documento',
    nullable: true,
    type: 'varchar',
    length: 3,
  })
  tipoDocumento: string;

  @Column({
    name: 'telefono_fijo',
    nullable: true,
    type: 'varchar',
    length: 20,
  })
  telefonoFijo: string;

  @Column({
    name: 'telefono_celular',
    nullable: true,
    type: 'varchar',
    length: 20,
  })
  telefonoMovil: string;

  @Column({ name: 'mail', nullable: true, type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'enum', enum: sexo, enumName: 'sexo', default: sexo.MALE })
  sexo: sexo;
  // Nueva columna identidad con los datos de esta tabla?

  @OneToMany(
    () => CliDocumentoDigitalizado,
    (cliDocumentoDigitalizado) => cliDocumentoDigitalizado.cliPaciente,
  )
  cliDocumentoDigitalizado: CliDocumentoDigitalizado[];

  @Column({ name: 'fecha_nacimiento' })
  fecha_nacimiento: Date;

  @Column({ name: 'direccion', type: 'varchar', length: 100, nullable: true })
  direccion: string;
  @Column({
    name: 'paciente_federadoid',
    type: 'int',
    nullable: false,
    default: 0,
  })
  fedNacion: number;
  @Column({ name: 'provincia', type: 'varchar', length: 100 })
  provincia: string;
  @Column({ name: 'localidad', type: 'varchar', length: 100 })
  localidad: string;
  @Column({ name: 'codigo_postal', type: 'varchar', length: 10 })
  codigoPostal: string;
  activeFedNacion: boolean;
  @Column({ name: 'idpais', type: 'int', default: 1 })
  idpais: number;
  @Column({ name: 'idprovincia', type: 'int', default: 1 })
  idprovincia: number;
  @Column({ name: 'soundex_nombre', type: 'varchar', length: 10 })
  soundexNombre: string;
  @Column({ name: 'soundex_apellido', type: 'varchar', length: 10 })
  soundexApellido: string;
  @Column({ name: 'hora_nacimiento', type: 'time' })
  horaNacimiento: Date;
  @Column({ name: 'lugar_fisico_nacimiento', type: 'varchar', length: 100 })
  lugarFisicoNacimiento: string;
  @Column({ name: 'grupo_factor_madre', type: 'varchar', length: 10 })
  grupoMadreFactor: string;
  @Column({ name: 'plan_obra_social', type: 'varchar', length: 200 })
  planObraSocial: string;
}

/*
plan_obra_social

CREATE TABLE `pacientes` (
  `idpaciente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `documento` varchar(11) NOT NULL,
  `tipo_documento` varchar(3) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL,
  `provincia` varchar(100) DEFAULT NULL,
  `telefono_fijo` varchar(20) DEFAULT NULL,
  `telefono_celular` varchar(20) DEFAULT NULL,
  `lugar_nacimiento` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `estado_civil` varchar(50) DEFAULT NULL,
  `ocupacion` varchar(100) DEFAULT NULL,
  `afiliado` varchar(100) DEFAULT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `codigo_postal` varchar(10) DEFAULT NULL,
  `idpais` int NOT NULL,
  `idprovincia` int NOT NULL,
  `nombre1` varchar(150) DEFAULT NULL,
  `apellido1` varchar(150) DEFAULT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nombre2` varchar(50) NOT NULL,
  `apellido2` varchar(50) NOT NULL,
  `sexo_falso` int NOT NULL DEFAULT '0',
  `soundex_nombre` varchar(10) NOT NULL,
  `soundex_apellido` varchar(10) NOT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `paciente_federadoid` int NOT NULL,
  `hora_nacimiento` time NOT NULL,
  `lugar_fisico_nacimiento` varchar(100) NOT NULL,
  `grupo_factor_madre` varchar(10) NOT NULL,
  `plan_obra_social` varchar(200) NOT NULL,
  `iva_exento` int NOT NULL DEFAULT '0',
  `grupo_sanguineo` varchar(2) DEFAULT NULL,
  `factor_sanguineo` varchar(1) DEFAULT NULL,
  `teleconsulta` int DEFAULT NULL,
  `mail_enviado_turno` int DEFAULT '0',
  PRIMARY KEY (`idpaciente`,`documento`)
) ENGINE=InnoDB AUTO_INCREMENT=594174 DEFAULT CHARSET=utf8mb3

*/
