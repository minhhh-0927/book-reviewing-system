import { NestExpressApplication } from "@nestjs/platform-express";
import * as nunjucks from "nunjucks";
import path, { join } from "path";
global.ROOT_DIR = path.join(__dirname, "..");

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.useStaticAssets(join(__dirname, "..", "static"));
  const environment = nunjucks.configure(
    [
      join(__dirname, "..", "templates"),
      join(__dirname, ".", "system_template"),
    ],
    {
      autoescape: true,
      throwOnUndefined: false,
      trimBlocks: false,
      lstripBlocks: false,
      watch: true,
      noCache: process.env.NODE_ENV === "develop",
      express: app,
    }
  );
  app.engine("njk", environment.render);
  app.setViewEngine("njk");
  app.set("view cache", true);

  await app.listen(3000);
}

bootstrap();
