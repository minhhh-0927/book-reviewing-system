import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "./user.entity";

@Entity({ name: "request" })
export class Request extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public content: string;

  @Column()
  public status: number;

  @Column()
  public user_id: number;

  @CreateDateColumn({
    default: "now()",
    nullable: true,
  })
  public created_at: string;

  @UpdateDateColumn({
    default: "now()",
    nullable: true,
  })
  public updated_at: string;

  @ManyToOne((type) => User, (user) => user.requests)
  user: User;
}
