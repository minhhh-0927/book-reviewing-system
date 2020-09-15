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
import {Book} from './book.entity'
import {Category} from './category.entity'
import {User} from '../../user/entities'

@Entity({ name: 'read_status' })
export class ReadStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: number

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

  @ManyToOne(type => Book, book => book.read_status)
  book_id: Book;

  @ManyToOne(type => User, user => user.read_status)
  user_id: User
}
