import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { User } from '../../user/entities'
import { Book } from './book.entity'

@Entity({ name: 'Favorites' })
export class Favorite extends BaseEntity {
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

  @ManyToOne(type => User, user => user.favorite)
  user_id: User

  @ManyToOne(type => Book, book => book.favorite)
  book_id: Book
}
