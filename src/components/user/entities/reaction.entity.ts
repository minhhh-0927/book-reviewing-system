import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

import UserEntity from './user.entity';
import ActivityLogEntity from './activity_logs.entity';

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

    @CreateDateColumn({ type: 'timestamp' })
    public created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updated_at: Date;

    @ManyToOne(type => UserEntity, user => user.reactions)
    user: UserEntity;

    @ManyToOne(type => ActivityLogEntity, activity_log => activity_log.reactions)
    activity_log: ActivityLogEntity;

}
