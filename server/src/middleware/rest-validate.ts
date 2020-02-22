import { AsyncValidationOptions, Schema } from "@hapi/joi";
import { Context, Middleware, Next } from "koa";

/**
 * Perform the validation
 */
const doValidate = async (
  part: "params" | "body" | "query",
  schema: Schema,
  ctx: Context
): Promise<void> => {
  try {
    const dataLookup = {
      params: ctx.params,
      query: ctx.query,
      body: ctx.request.body,
    };
    const options: AsyncValidationOptions = {
      abortEarly: false,
      convert: true,
      allowUnknown: true,
    };
    await schema.validateAsync(dataLookup[part], options);
  } catch (e) {
    ctx.throw(400, `Invalid ${part}: ${e}`);
  }
};

/**
 * HOF to create a middleware to validate context params
 */
const validateParams = (...schema: Schema[]): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  await Promise.all(schema.map(s => doValidate("params", s, ctx)));
  await next();
};

/**
 * HOF to create a middleware to validate context queries
 */
const validateQueries = (...schema: Schema[]): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  await Promise.all(schema.map(s => doValidate("query", s, ctx)));
  await next();
};

/**
 * HOF to create a middleware to validate context body
 */
const validateBody = (...schema: Schema[]): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  await Promise.all(schema.map(s => doValidate("body", s, ctx)));
  await next();
};

export { validateParams, validateQueries, validateBody };
