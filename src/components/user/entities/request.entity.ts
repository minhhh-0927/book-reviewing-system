import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

import UserEntity from './user.entity';

@Entity()
export default class Request {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public content: string;

    @Column()
    public status: number;

    @Column()
    public user_id: number;

    @CreateDateColumn({ type: 'timestamp' })
    public created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updated_at: Date;

    @ManyToOne(type => UserEntity, user => user.requests)
    user: UserEntity;
}
