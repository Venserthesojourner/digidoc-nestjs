import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { protocolo } from 'src/modules/protocolo/entity/protocolo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

@Entity('episodio')
export class episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => paciente)
  pacientData: paciente;

  @ManyToOne(() => protocolo, (protocolo) => protocolo.id)
  @JoinColumn({ name: 'protocolo' })
  protocolType: protocolo;

  @Column({ type: 'enum', enumName: 'estado', enum: estado })
  @Column({ name: 'descripcion' })
  descripcion: string;

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

  @Column({ name: 'tipo_Servicio', type: 'json' })
  tipoServicio: JSON;
  /* Formato del tipoServicio {
    codigos: [
      {
        url: 'https://www.hl7.org/fhir/valueset-service-type.html',
        codigo: '60',
        mostrar: '',
      },
    ],
  } */
  @Column({ name: 'motivo_internacion' })
  motivoInternacion: number;
}

/*
Columns:
	idepisodio	int PK
	idpaciente	int
	idprofesional	int UN
	idobra_social	int UN
	idplan_financiacion	int
	fecha_ingreso	date
	fecha_egreso	date
	motivo_internacion	int
	tipo_alta	varchar(50)
	otro_medico_cabecera	varchar(100)
	encuesta_satisfaccion	int
	concentimiento_informado	int
	tipo_internacion	int UN
	tipo_intervencion	int UN
	hora_alta	time
	acompanante	varchar(100)
	alta_administrativa	int
	iddiagnostico_final	int
	alta_medica	int
	traslado	int
	servicio_traslado	varchar(10)
	formulario_traslado	int
	hora_traslado	time
	enfermedad_actual	longtext
	hora_ingreso	time
	autorizacion_practicas	int
	alta_enfermeria	int
	cantidad_tarjetas	int
	valor_tarjetas	varchar(10)
	entrega_control	int
	devolvio_control	int
	mail_acompanante	varchar(100)
	idlugar	int
	user	int
	obra_social_vigente_pago_realizado	int
	recibe_autorizacion	int
	carpeta_incompleta	int
	fecha_autorizacion_practicas	date
	fecha_pedido_autorizacion	date
	fecha_recibe_autorizacion	date
	pedido_autorizacion	int
	fecha_fue_autorizado	date
	idcirugia_programada	int
	autorizacion_cirugia	int

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
