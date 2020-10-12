import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

import { Book } from "../../book/entities/book.entity";
import { Category } from "../../book/entities/category.entity";
import { Comment } from "../../book/entities/comment.entity";
import { Favorite } from "../../book/entities/favorite.entity";
import { ReadStatus } from "../../book/entities/read_status.entity";
import { Reviews } from "../../book/entities/revirew.entity";
import ReactionEntity from "./reaction.entity";
import { Request } from "./request.entity";
import * as bcrypt from "bcrypt";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryColumn()
  public id: number;

  @Column({unique: true})
  public username: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public role: number;

  @Column()
  public salt: string;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public created_at: string;

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  public updated_at: string;

  @OneToMany((type) => Request, (request) => request.user)
  requests: Request;

  @OneToMany((type) => ReactionEntity, (reaction) => reaction.user)
  reactions: ReactionEntity;

  @OneToMany((type) => Book, (book) => book.user_id)
  book: Book[];

  @OneToMany((type) => Category, (category) => category.user_id)
  category: Category[];

  @OneToMany((type) => Favorite, (favorite) => favorite.user_id)
  favorite: Favorite[];

  @OneToMany((type) => Comment, (comment) => comment.user_id)
  comment: Comment[];

  @OneToMany((type) => ReadStatus, (read_status) => read_status.user_id)
  read_status: ReadStatus[];

  @OneToMany((type) => Reviews, (review) => review.user_id)
  review: Reviews[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);

    return hash === this.password;
  }
}
