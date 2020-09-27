import {
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

@Entity()
export default class Follow {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public follower_id: number;

  @Column()
  public following_id: number;

  @CreateDateColumn({ type: "timestamp" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updated_at: Date;
}
