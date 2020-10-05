import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { UserModule } from "./components/user";
import { BooksModule } from "./components/book/books.module";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import appConfig from "./config/app";

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
      entities: [],
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
