import { registerAs } from '@nestjs/config';

export default registerAs('configDataBase', () => {
  return {
    apiKey: process.env.API_KEY,
    connect: {
      database: process.env.MYSQL_DATABASE,
      port: parseInt(process.env.MYSQL_PORT),
      password: process.env.MYSQL_ROOT_PASSWORD,
      username: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
    },
  };
});
