const { error } = require("dotenv").config();
if (error) throw new Error(error);

import * as Koa from "koa";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";
import "reflect-metadata";
import packages from "./domain/packages.controller";
import currencies from "./domain/currencies.controller";

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(packages.routes()).use(packages.allowedMethods());
app.use(currencies.routes()).use(currencies.allowedMethods());

export default app;
