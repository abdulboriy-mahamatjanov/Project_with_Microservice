import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('BOOK') private clientBook: ClientProxy) {}

  findAll() {
    return this.clientBook.send('findAllBook', {});
  }
}
