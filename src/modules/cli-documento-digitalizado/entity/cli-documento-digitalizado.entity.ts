import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { CliDocumentoDigitalizadoAdjunto } from 'src/modules/cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity';

@Entity({ name: 'cli_documento_digitalizado' })
export class CliDocumentoDigitalizado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'descripcion', nullable: true, type: 'varchar', length: 200 })
  descripcion: string;

  @Column({
    name: 'tags',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 200,
    comment: 'etiquetas separadas por coma',
  })
  tags: string;

  @Column({ name: 'fecha', nullable: false, type: 'datetime' })
  fecha: Date;

  @Column({
    name: 'tipo',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 50,
  })
  tipo?: string;

  @Column({
    name: 'categoria',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 50,
  })
  categoria?: string;

  @ManyToOne(() => paciente, (paciente) => paciente.cliDocumentoDigitalizado)
  @JoinColumn({ name: 'cli_paciente_id' })
  cliPaciente: paciente;

  @Column({ name: 'cli_episodio_id', nullable: true, default: null })
  cliEpisodio?: number;

  @Column({ name: 'baja_fecha', nullable: true, default: null })
  bajaFecha?: Date;

  @OneToMany(
    () => CliDocumentoDigitalizadoAdjunto,
    (CliDocumentoDigitalizadoAdjunto) =>
      CliDocumentoDigitalizadoAdjunto.cliDocumentoDigitalizado,
  )
  CliDocumentoDigitalizadoAdjunto: CliDocumentoDigitalizadoAdjunto[];
}
