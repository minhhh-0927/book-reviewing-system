import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserIdBooksTable1602680674233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" RENAME COLUMN "user_id" TO "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" RENAME COLUMN "userId" TO "user_id"`);
    }

}
