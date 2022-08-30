import { DataSource } from 'typeorm';
import { protocolo } from '../entity/protocolo.entity';

export const ProtocoloProviders = [
  {
    provide: 'PROTOCOLO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(protocolo),
    inject: ['DATA_SOURCE'],
  },
];
