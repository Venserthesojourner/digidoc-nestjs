import { DataSource } from 'typeorm';
import { protocoloMaternidadIngreso } from '../entity/mat_protocolo_ingreso.entity';

export const protocoloMaternidadIngresoProvider = [
  {
    provide: 'PROTOCOLO_MATERNIDAD_INGRESO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(protocoloMaternidadIngreso),
    inject: ['DATA_SOURCE'],
  },
];
