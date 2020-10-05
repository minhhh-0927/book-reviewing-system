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

import ReactionEntity from "./reaction.entity";

@Entity()
export default class ActivityLog {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public subject_id: number;

  @Column()
  public subject_type: string;

  @CreateDateColumn({ type: "timestamp" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updated_at: Date;

  // @OneToMany((type) => ReactionEntity, (reaction) => reaction.activity_log)
  // reactions: ReactionEntity;
}
