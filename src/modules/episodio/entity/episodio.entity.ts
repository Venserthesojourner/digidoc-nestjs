import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { protocolo } from 'src/modules/protocolo/entity/protocolo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum estado {
  PLANNED = 'planned',
  ARRIVED = 'arrived',
  TRIAGED = 'triaged',
  IN_PROGRESS = 'in-progress',
  ON_LEAVE = 'onleave',
  FINISHED = 'finished',
  CANCELLED = 'cancelled',
}

@Entity('episodios')
export class episodio {
  @PrimaryGeneratedColumn({ name: 'idepisodio' })
  id: number;

  @OneToOne(() => paciente, (paciente) => paciente.id)
  @JoinColumn({ name: 'idpaciente' })
  pacientData: paciente;

  @ManyToOne(() => protocolo, (protocolo) => protocolo.id)
  @JoinColumn({ name: 'protocolo_id' })
  protocolType: protocolo;

  @OneToMany(
    () => CliDocumentoDigitalizado,
    (cliDocumentoDigitalizado) => cliDocumentoDigitalizado.cliEpisodio,
  )
  cliDocumentoDigitalizado: CliDocumentoDigitalizado[];

  @Column({ name: 'motivo_internacion', type: 'varchar' })
  motivoInternacion: string;
  //Esto es un modelo aparte, D:

  @Column({
    type: 'enum',
    enum: estado,
    enumName: 'estado',
    default: estado.ARRIVED,
  })
  estado: estado;

  @Column({ name: 'fecha_ingreso' })
  fechaIngreso: Date;

  @Column({ name: 'fecha_egreso' })
  fechaEgreso: Date;

  /*@Column({ name: 'tipo_Servicio', type: 'json' })
 tipoServicio: JSON;
 Formato del tipoServicio {
   codigos: [
     {
       url: 'https://www.hl7.org/fhir/valueset-service-type.html',
       codigo: '60',
       mostrar: '',
     },
   ],
 } */
}

/*
Columns:
 CREATE TABLE `episodios` (
  `idepisodio` int NOT NULL,
  `idpaciente` int NOT NULL,
  `idprofesional` int unsigned NOT NULL,
  `idobra_social` int unsigned NOT NULL,
  `idplan_financiacion` int NOT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_egreso` date NOT NULL,
  `motivo_internacion` int NOT NULL DEFAULT '0',
  `tipo_alta` varchar(50) NOT NULL,
  `otro_medico_cabecera` varchar(100) DEFAULT NULL,
  `encuesta_satisfaccion` int NOT NULL DEFAULT '0',
  `concentimiento_informado` int NOT NULL DEFAULT '0',
  `tipo_internacion` int unsigned DEFAULT '0',
  `tipo_intervencion` int unsigned DEFAULT NULL,
  `hora_alta` time NOT NULL,
  `acompanante` varchar(100) DEFAULT NULL,
  `alta_administrativa` int NOT NULL DEFAULT '0',
  `iddiagnostico_final` int NOT NULL,
  `alta_medica` int NOT NULL DEFAULT '0',
  `traslado` int NOT NULL,
  `servicio_traslado` varchar(10) DEFAULT NULL,
  `formulario_traslado` int NOT NULL DEFAULT '0',
  `hora_traslado` time NOT NULL,
  `enfermedad_actual` longtext,
  `hora_ingreso` time NOT NULL,
  `autorizacion_practicas` int NOT NULL DEFAULT '0',
  `alta_enfermeria` int NOT NULL DEFAULT '0',
  `cantidad_tarjetas` int NOT NULL,
  `valor_tarjetas` varchar(10) DEFAULT NULL,
  `entrega_control` int NOT NULL DEFAULT '0',
  `devolvio_control` int NOT NULL DEFAULT '0',
  `mail_acompanante` varchar(100) NOT NULL,
  `idlugar` int NOT NULL DEFAULT '1',
  `user` int NOT NULL,
  `obra_social_vigente_pago_realizado` int NOT NULL DEFAULT '0',
  `recibe_autorizacion` int NOT NULL DEFAULT '0',
  `carpeta_incompleta` int NOT NULL DEFAULT '0',
  `fecha_autorizacion_practicas` date NOT NULL,
  `fecha_pedido_autorizacion` date NOT NULL,
  `fecha_recibe_autorizacion` date NOT NULL,
  `pedido_autorizacion` int NOT NULL DEFAULT '0',
  `fecha_fue_autorizado` date NOT NULL,
  `idcirugia_programada` int NOT NULL,
  `autorizacion_cirugia` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idepisodio`),
  KEY `episodio_FKIndex1` (`idpaciente`),
  KEY `episodio_FKIndex2` (`idprofesional`),
  KEY `episodio_FKIndex3` (`idobra_social`),
  KEY `episodio_FKIndex4` (`idplan_financiacion`),
  KEY `motivo_internacion_index` (`motivo_internacion`),
  KEY `idcirugia_programada_index` (`idcirugia_programada`),
  CONSTRAINT `episodio_ibfk_1` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`idpaciente`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

$parametros_images .= "&encounter_type_code={$arreglo['tipo_internacion']}";
                                $parametros_images .= "&encounter_type_text=$tipo_internacion";
                                $parametros_images .= "&encounter_type_comment=$tipo_internacion";
                                $parametros_images .= "&encounter_priority_code={$arreglo['tipo_intervencion']}";
                                $parametros_images .= "&encounter_priority_text=$tipo_intervencion";
                                $parametros_images .= "&encounter_reason_code={$arreglo['motivo_internacion']}";
                                $parametros_images .= "&encounter_reason_text={$nombre_motivo['descripcion']}";
                                $parametros_images .= "&encounter_period_start={$arreglo['fecha_ingreso']}";
                                $parametros_images .= "&encounter_period_end={$arreglo['fecha_ingreso']}"; 
*/
