import { EntityRepository, Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { getBooksFilterDto } from "./dto/get-books-filter.dto";
import { CreateBookDto } from "./dto/create-book.dto";
import {User} from '../user/entities'

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async getBooks(bookFilterDto: getBooksFilterDto): Promise<Book[]> {
    const { name, search } = bookFilterDto;
    const query = this.createQueryBuilder("book");

    if (name) {
      query.andWhere("book");
    }

    if (search) {
      query.andWhere(
        "(book.name LIKE :search OR book.description LIKE :search)",
        { search: `%${search}` }
      );
    }

    return await query.getMany();
  }

  async createBook(
    createBookDto: CreateBookDto,
    user: User,
  ): Promise<Book> {
    const {
      title,
      description,
      public_date,
      author,
      number_page,
      price,
    } = createBookDto;

    const book = new Book();
    book.name = title;
    book.description = description;
    book.public_date = public_date;
    book.author = author;
    book.number_page = number_page;
    book.price = price;
    book.user_id = user;
    await this.save(book, {
      reload: false,
    });

    return book;
  }
}
