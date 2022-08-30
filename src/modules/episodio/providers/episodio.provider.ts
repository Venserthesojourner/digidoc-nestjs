import { DataSource } from 'typeorm';
import { episodio } from '../entity/episodio.entity';

export const EpisodioProviders = [
  {
    provide: 'EPISODIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(episodio),
    inject: ['DATA_SOURCE'],
  },
];
