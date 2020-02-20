import { AsyncValidationOptions, Schema } from "@hapi/joi";
import { Context, Middleware, Next } from "koa";

/**
 * Perform the validation
 */
const doValidate = async (
  part: "params" | "body",
  schema: Schema,
  ctx: Context,
  next: Next
): Promise<void> => {
  try {
    const dataLookup: any = {
      params: ctx.params,
      body: ctx.request.body,
    };
    const options: AsyncValidationOptions = {
      abortEarly: false,
      convert: true,
    };
    await schema.validateAsync(dataLookup[part], options);
    await next();
  } catch (e) {
    ctx.throw(`Invalid ${part}: ${e}`, 400);
  }
};

/**
 * HOF to create a middleware to validate context params
 */
const validateParams = (schema: Schema): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  await doValidate("params", schema, ctx, next);
};

/**
 * HOF to create a middleware to validate context body
 */
const validateBody = (schema: Schema): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  await doValidate("body", schema, ctx, next);
};

export { validateParams, validateBody };
