export = {
  name: "default",
  host: process.env.DATABASE_HOST,
  type: "mysql",
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB_NAME,
  entities: [
    'dist/components/**/*.entity{.ts,.js}',
    'src/components/**/*.entity{.ts,.js}',
  ],
  migrationsTableName: "nestjs_migrations",
  migrations: [
    'src/migrations/*.ts',
    'dist/migrations/*{.ts,.js}'
  ],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
