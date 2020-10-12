import { MigrationInterface, QueryRunner } from "typeorm";

export class updateSalltUsersTable1602410917216 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `users` ADD `salt` varchar(255) NOT NULL"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `users` DROP COLUMN `salt`");
  }
}
