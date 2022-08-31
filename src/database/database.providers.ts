import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config/dataBase.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigType<typeof config>) => {
      const { username, host, database, password, port } = config().connect;
      const dataSource = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + './../**/entity/*.entity{.ts,.js}'],
        synchronize: false, //Set to true to synchronize database schema [Not for Production]
        logging: false,
      });
      return dataSource.initialize();
    },
  },
];
