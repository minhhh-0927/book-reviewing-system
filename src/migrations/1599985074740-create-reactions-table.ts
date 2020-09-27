import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createReactionsTable1599985074740 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reactions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "type",
            type: "int",
          },
          {
            name: "activity_logs",
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reactions");
  }
}
