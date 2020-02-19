import * as Koa from "koa";
import "reflect-metadata";
import packages from "./domain/packages.controller";
const logger = require("koa-pino-logger");

const app = new Koa();
app.use(logger());
app.use(packages.routes()).use(packages.allowedMethods());

export default app;
