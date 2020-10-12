import {Injectable, Query} from '@nestjs/common'
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
}
