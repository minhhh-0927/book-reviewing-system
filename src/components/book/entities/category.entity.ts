import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../user/entities";
import { BookCategory } from "./book_category.entity";

@Entity({ name: "categories" })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({
    default: "now()",
    nullable: true,
  })
  created_at: string;

  @UpdateDateColumn({
    default: "now()",
    nullable: true,
  })
  updated_at: string;

  @ManyToOne(type => User, user => user.category)
  user_id: User

  @OneToMany(
    (type) => BookCategory,
    (book_category) => book_category.category_id
  )
  book_category: BookCategory;
}
