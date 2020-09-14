import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn} from 'typeorm';

import {Book} from '../../book/entities/book.entity';
import {Category} from '../../book/entities/category.entity';
import {Comment} from '../../book/entities/comment.entity';
import {Favorite} from '../../book/entities/favorite.entity';
import {ReadStatus} from '../../book/entities/read_status.entity';
import {Reviews} from '../../book/entities/revirew.entity';
import ReactionEntity from './reaction.entity';
import RequestEntity from './request.entity';

@Entity({ name: 'user' })
export class User {

    @PrimaryColumn()
    public id: number;

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
    public role: number;

    @Column()
    public lastName: string;

    @CreateDateColumn({ type: 'timestamp' })
    public created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updated_at: Date;

    @OneToMany(type => RequestEntity , request => request.user)
    requests: RequestEntity;

    @OneToMany(type => ReactionEntity , reaction => reaction.user)
    reactions: ReactionEntity;


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
