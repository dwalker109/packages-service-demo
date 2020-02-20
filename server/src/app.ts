require("dotenv").config();

import * as Koa from "koa";
import * as logger from "koa-logger";
import "reflect-metadata";
import packages from "./domain/packages.controller";

const app = new Koa();
app.use(logger());
app.use(packages.routes()).use(packages.allowedMethods());

export default app;
