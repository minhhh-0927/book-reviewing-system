import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { User } from '../../user/entities'
import {Favorite} from './favorite.entity'
import {BookCategory} from './book_category.entity'
import {Comment} from './comment.entity'
import {Reviews} from './revirew.entity'
import {ReadStatus} from './read_status.entity'

@Entity({ name: 'books' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  image: string

  @Column()
  public_date: string

  @Column()
  author: string

  @Column()
  number_page: number

  @Column()
  price: string

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

  @ManyToOne(type => User, user => user.book)
  user_id: User;

  @OneToMany(type => Favorite, favorite => favorite.book_id)
  favorite: Favorite;

  @OneToMany(type => BookCategory, book_category => book_category.book_id)
  book_category: BookCategory;

  @OneToMany(type => Comment, comment => comment.book_id)
  comment: Comment;

  @OneToMany(type => Reviews, review => review.book_id)
  review: Reviews;

  @OneToMany(type => ReadStatus, read_status => read_status.book_id)
  read_status: ReadStatus;
}
