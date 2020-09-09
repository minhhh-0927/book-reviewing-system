import { Column, Entity, Generated, PrimaryColumn, OneToMany } from 'typeorm';

import {Book} from '../../book/entities/book.entity';
import {Category} from '../../book/entities/category.entity'
import {Favorite} from '../../book/entities/favorite.entity'
import {Comment} from '../../book/entities/comment.entity'
import {ReadStatus} from '../../book/entities/read_status.entity'
import {Reviews} from '../../book/entities/revirew.entity'

@Entity({ name: 'user' })
export class User {

  @PrimaryColumn()
  @Generated('uuid')
  public id: string;

  @Column({
    unique: true,
  })
  public username: string;

  @Column({
    unique: true,
  })
  public email: string;

  @Column({
    select: false,
  })
  public password: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @OneToMany(type => Book, book => book.user_id)
  book: Book[];

  @OneToMany(type => Category, category => category.user_id)
  category: Category[];

  @OneToMany(type => Favorite, favorite => favorite.user_id)
  favorite: Favorite[];

  @OneToMany(type => Comment, comment => comment.user_id)
  comment: Comment[];

  @OneToMany(type => ReadStatus, read_status => read_status.user_id)
  read_status: ReadStatus[];

  @OneToMany(type => Reviews, review => review.user_id)
  review: Reviews[];
}
