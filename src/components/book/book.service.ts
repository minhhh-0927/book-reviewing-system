import { CreateBookDto } from './dto/create-book.dto';
import {Injectable, NotFoundException, Query} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {BookRepository} from './book.repository'
import {getBooksFilterDto} from './dto/get-books-filter.dto'
import {Book} from './entities/book.entity'

@Injectable()
export class BookService {
  constructor(@InjectRepository(BookRepository)
    private bookRepository: BookRepository
  ) {}

  async getBooks(@Query() bookFilterDto: getBooksFilterDto): Promise<Book[]> {
  return this.bookRepository.getBooks(bookFilterDto);
  }

  async getBookById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne(id);

    if (!book) {
      throw new NotFoundException(`Book With ID "${id}" not found`);
    }

    return book;
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookRepository.createTask(createBookDto);
  }
}
