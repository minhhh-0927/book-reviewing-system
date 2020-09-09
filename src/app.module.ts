import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {UserModule} from './components/user';
import { BooksModule } from './components/book/books.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        BooksModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(
        private connection: Connection,
    ) {
    }
}
