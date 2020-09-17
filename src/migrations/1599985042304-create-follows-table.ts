import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createFollowsTable1599985042304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'follows',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'follower_id',
                    type: 'int',
                    comment: 'who follows sb',
                },
                {
                    name: 'following_id',
                    type: 'int',
                    comment: 'who is being followed by sb',
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                    isNullable: true,
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                    isNullable: true,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('follows');
    }

}
