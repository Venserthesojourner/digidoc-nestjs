import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { contentParser } from 'fastify-multer';
import 'reflect-metadata';
import { join } from 'path';
import helmet from 'fastify-helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  const configRedis = new DocumentBuilder()
    .setTitle('La Aplicacioncita del Amour')
    .setDescription('Lo que se supone implemente para el laburo')
    .setVersion('1.0')
    .addTag('Weeey')
    .build();
  const documentRedis = SwaggerModule.createDocument(app, configRedis);
  SwaggerModule.setup('api', app, documentRedis);

  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });
  app.register(contentParser);
  app.useStaticAssets({ root: join(__dirname, '../../fastify-file-upload') });

  const config = new DocumentBuilder()
    .setTitle('Digitalización')
    .setDescription('Modulo para testear el rendimineto del framework')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation-swagger', app, document);
  await app.listen(3000);
}
bootstrap();
