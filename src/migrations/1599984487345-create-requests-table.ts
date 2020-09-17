import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createRequestsTable1599984487345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'requests',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'content',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'int',
                },
                {
                    name: 'user_id',
                    type: 'int',
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
        await queryRunner.dropTable('requests');
    }
}
