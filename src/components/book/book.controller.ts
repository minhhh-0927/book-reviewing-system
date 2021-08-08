import { CreateBookDto } from './dto/create-book.dto';
import {BookService} from './book.service'
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import {getBooksFilterDto} from './dto/get-books-filter.dto'
import {Book} from './entities/book.entity'
import {AuthGuard} from '@nestjs/passport'
import {GetUser} from '../user/get-user.decorator'
import {User} from '../user/entities'

@Controller('books')
@UseGuards(AuthGuard())
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getBooks(@Query(ValidationPipe) bookFilterDto: getBooksFilterDto): Promise<Book[]> {
    return this.bookService.getBooks(bookFilterDto);
  }

  @Get('/:id')
  getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createBookDto: CreateBookDto,
    @GetUser() user: User
  ): Promise<Book> {
    return this.bookService.createBook(createBookDto, user);
  }
}
