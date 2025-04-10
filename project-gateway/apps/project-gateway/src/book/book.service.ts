import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

const Books = [];

@Injectable()
export class BookService {
  async create(createBookDto: CreateBookDto) {
    try {
      const bookId = Books.length + 1;

      const NewBook = {
        ...createBookDto,
        id: bookId,
      };

      Books.push(NewBook);

      return NewBook;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const books = await Books.filter((val) => val);
      if (!books) return { message: 'Books are empty' };

      return books;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
