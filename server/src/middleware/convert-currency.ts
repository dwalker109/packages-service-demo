import { Middleware, Context, Next } from "koa";
import { Package } from "../entities/Package";
import { convert } from "../services/currency.service";

/**
 * Convert a package (and its products) currencies
 */
const convertItem = (item: Package, currency: string): Package => {
  item.price = convert(item.price, currency);
  item.products = item.products.map(product => {
    product.price = convert(product.price, currency);
    return product;
  });

  return item;
};

/**
 * HOF to create a middleware to convert the response body price currencies
 */
export const convertCurrency = (): Middleware => async (
  ctx: Context,
  next: Next
): Promise<void> => {
  if (ctx.query.currency && ctx.body) {
    if (Array.isArray(ctx.body)) {
      ctx.body = ctx.body.map(item => convertItem(item, ctx.query.currency));
    } else {
      ctx.body = convertItem(ctx.body, ctx.query.currency);
    }
  }

  await next();
};
