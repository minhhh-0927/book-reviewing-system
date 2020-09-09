import {MigrationInterface, QueryRunner} from 'typeorm';

export class User1599107987597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table "user"
            (
                id          SERIAL PRIMARY KEY,
                username    varchar(150)                           not null,
                email       varchar(150)                           not null,
                password    varchar(128)                           not null,
                "firstName" varchar(150),
                "lastName"  varchar(150),
                "createAt"  timestamp with time zone default now() not null,
                "updateAt"  timestamp with time zone default now() not null
            );
        `);

        await queryRunner.query(`
            alter table "user"
            owner to "postgres";
        `);

        await queryRunner.query(`
            create unique index user_email_uindex
            on "user" (email);
        `);

        await queryRunner.query(`
            create unique index user_username_uindex
            on "user" (username);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table "user";
        `);
    }

}
