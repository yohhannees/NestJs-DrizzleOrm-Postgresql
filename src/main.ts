/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseConfig, NestConfig } from './config/default.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const databaseConfig = configService.get<DatabaseConfig>('database.url');

  await app.listen(nestConfig!.PORT, () => {
    console.log(`app listen port ${nestConfig!.PORT}`);
    console.log(`url: ${databaseConfig}`);
  });
}
bootstrap();
