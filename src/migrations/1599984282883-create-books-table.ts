import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createBooksTable1599984282883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "books",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "image",
            type: "text",
          },
          {
            name: "public_date",
            type: "varchar",
          },
          {
            name: "author",
            type: "varchar",
          },
          {
            name: "number_page",
            type: "int",
          },
          {
            name: "price",
            type: "int",
          },
          {
            name: "user_id",
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
    await queryRunner.dropTable("books");
  }
}
