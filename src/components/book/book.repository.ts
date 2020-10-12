import {EntityRepository, Repository} from 'typeorm'
import {Book} from './entities/book.entity'
import {getBooksFilterDto} from './dto/get-books-filter.dto'

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async getBooks(bookFilterDto: getBooksFilterDto): Promise<Book[]> {
    const { name, search } = bookFilterDto;
    const query = this.createQueryBuilder('book');

    if (name) {
      query.andWhere('book')
    }

    if (search) {
      query.andWhere('(book.name LIKE :search OR book.description LIKE :search)', { search: `%${search}` });
    }

    return await query.getMany();
  }
}
