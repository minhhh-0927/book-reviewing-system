import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {BookRepository} from './book.repository'
import {UserModule} from '../user'
import {BookController} from './book.controller'
import {BookService} from './book.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository]),
    UserModule,
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BooksModule {}
