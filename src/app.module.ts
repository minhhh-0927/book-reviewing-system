import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { UserModule } from "./components/user";
import { BooksModule } from "./components/book/books.module";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import appConfig from "./config/app";
import { User } from "./components/user/entities";
import {Request} from './components/user/entities/request.entity'
import ReactionEntity from './components/user/entities/reaction.entity'
import {Book} from './components/book/entities/book.entity'
import {Category} from './components/book/entities/category.entity'
import {Favorite} from './components/book/entities/favorite.entity'
import {Comment} from './components/book/entities/comment.entity'
import {ReadStatus} from './components/book/entities/read_status.entity'
import {Reviews} from './components/book/entities/revirew.entity'
import {BookCategory} from './components/book/entities/book_category.entity'
import Follow from "./components/user/entities/follow.entity";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: databaseConfig().databaseHost,
      port: databaseConfig().databasePort,
      username: databaseConfig().databaseUsername,
      password: databaseConfig().databasePassword,
      database: databaseConfig().databaseName,
      entities: [User, Request, ReactionEntity, Book, Category, Favorite, Comment, ReadStatus, Reviews, BookCategory, Follow],
    }),
    UserModule,
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
