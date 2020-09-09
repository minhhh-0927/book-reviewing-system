import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { User } from '../../user/entities'
import { Book } from './book.entity'

@Entity({ name: 'Reviews' })
export class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @Column()
  rating: number

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

  @ManyToOne(type => User, user => user.review)
  user_id: User

  @ManyToOne(type => Book, book => book.review)
  book_id: Book
}
