import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(app, 'apppppp');

  await app.listen(3000, undefined, () => {
    console.log('listening');

  })

}
bootstrap();

