import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { CliDocumentoDigitalizado } from 'src/modules/cli-documento-digitalizado/entity/cli-documento-digitalizado.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum estado {
  CURRENT = 'current',
  SUPERSEDED = 'superseded',
  ENTERED_IN_ERROR = 'entered-in-error',
}

@Entity({ name: 'cli_documento_digitalizado_adjunto' })
export class CliDocumentoDigitalizadoAdjunto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => CliDocumentoDigitalizado,
    (cliDocumentoDigitalizado) => cliDocumentoDigitalizado.id,
  )
  @JoinColumn({ name: 'cli_documento_digitalizado_id' })
  cliDocumentoDigitalizado: CliDocumentoDigitalizado;

  @Column({
    name: 'content_type',
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  contentType: string;

  @Column({
    name: 'filename',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 100,
  })
  filename: string;

  @Column({
    name: 'filename_thumbnail',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 100,
  })
  filenameThumbnail: string;

  @Column({
    name: 'bytes',
    nullable: true,
    default: null,
    type: 'int',
  })
  bytes: number;

  @Column({
    enum: estado,
    enumName: 'estado',
    type: 'enum',
    default: estado.CURRENT,
  })
  estado: estado;

  @Column({
    name: 'alto',
    nullable: true,
    default: null,
    type: 'int',
  })
  alto: number;

  @Column({
    name: 'ancho',
    nullable: true,
    default: null,
    type: 'int',
  })
  ancho: number;

  @Column({
    name: 'duracion',
    nullable: true,
    default: null,
    type: 'int',
  })
  duracion: number;

  @Column({
    name: 'sha1',
    nullable: true,
    default: null,
    type: 'varchar',
    length: 255,
  })
  sha1: string;

  @Column({ name: 'fecha', nullable: false, type: 'datetime' })
  fecha: Date;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ type: 'timestamp' })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({ type: 'timestamp' })
  updateAt: Timestamp;

  url: any;
}
