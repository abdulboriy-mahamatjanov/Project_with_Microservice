import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, () =>
    console.log(`Server started successfully on port: ${process.env.PORT}`),
  );
}

bootstrap();
