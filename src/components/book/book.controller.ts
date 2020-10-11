import {BookService} from './book.service'
import {Controller, Get, Query, ValidationPipe} from '@nestjs/common'
import {getBooksFilterDto} from './dto/get-books-filter.dto'
import {Book} from './entities/book.entity'

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooks(@Query(ValidationPipe) bookFilterDto: getBooksFilterDto): Promise<Book[]> {
    return this.bookService.getBooks(bookFilterDto);
  }
}
