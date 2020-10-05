import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCommentsTable1599987739907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "content",
            type: "text",
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "book_id",
            type: "int",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "now()",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "now()",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("comments");
  }
}
