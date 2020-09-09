import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createReviewsTable1599986895424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'reviews',
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
                        type: 'text',
                    },
                    {
                        name: 'rating',
                        type: 'int',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    },
                    {
                        name: 'book_id',
                        type: 'int',
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'now()',
                        isNullable: true
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                        default: 'now()',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('reviews')
    }

}
