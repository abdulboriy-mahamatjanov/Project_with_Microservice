import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';

@Module({
  imports: [ConfigModule.forRoot(), BookModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
