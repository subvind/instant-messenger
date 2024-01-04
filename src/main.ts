import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as express from 'express';


const port = process.env.PORT || 1337

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Set the view engine and the views folder
  app.setViewEngine('ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

  console.log('started on port', port)
  await app.listen(port);
}

bootstrap();
