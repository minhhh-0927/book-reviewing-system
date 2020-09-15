import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import {Book} from './book.entity'
import {Category} from './category.entity'

@Entity({ name: 'book_category' })
export class BookCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({
    default: 'now()',
    nullable: true,
  })
  created_at: string

  @UpdateDateColumn({
    default: 'now()',
    nullable: true,
  })
  updated_at: string

  @ManyToOne(type => Book, book => book.book_category)
  book_id: Book;

  @ManyToOne(type => Category, category => category.book_category)
  category_id: Category;
}
