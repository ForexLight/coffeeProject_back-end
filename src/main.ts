import { NestFactory } from '@nestjs/core';
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const PORT = process.env.PORT || 3000

  const config = new DocumentBuilder()
      .setTitle('nest app')
      .setDescription('rest api documentation')
      .setVersion('1.0.0')
      .build()

  const documentation = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, documentation)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => {
    console.log('server started on http://localhost:' + PORT)
  });
}
start();
