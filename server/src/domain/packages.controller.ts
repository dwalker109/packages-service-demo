import * as Router from "@koa/router";
import { Context, Next } from "koa";
import * as parseBody from "koa-body";
import { Package } from "../entities/Package";
import { convertCurrency } from "../middleware/convert-currency";
import {
  validateBody,
  validateParams,
  validateQueries,
} from "../middleware/rest-validate";
import { getProducts } from "../services/products.service";
import { findAll, findById, remove, save } from "./packages.repo";
import { currencySchema, idSchema, pkgSchema } from "./packages.schemas";

const prefix = "/packages";

const router: Router = new Router();
router.prefix(prefix);

/**
 * Index
 */
router.get(
  "/",
  validateQueries(currencySchema),
  async (ctx: Context, next: Next) => {
    const packages = await findAll();
    ctx.body = packages;
    await next();
  },
  convertCurrency()
);

/**
 * Read
 */
router.get(
  "/:id",
  validateParams(idSchema),
  validateQueries(currencySchema),
  async (ctx: Context, next: Next) => {
    const pkg = await findById(ctx.params.id);
    ctx.body = pkg;
    await next();
  },
  convertCurrency()
);

/**
 * Worker func to process and perform a save
 */
const saveFromBody = async (ctx: Context, pkg: Package): Promise<Package> => {
  const {
    request: { body: json },
  } = ctx;

  // Pull the provided product ids and save expanded details
  try {
    pkg.products = await getProducts(json.products);
  } catch (e) {
    ctx.throw(
      400,
      "Error while fetching product data (invalid id or token not set in .env?)"
    );
  }

  pkg.name = json.name;
  pkg.description = json.description;

  // Use a provided price, or calculate from products if not specified
  pkg.price =
    json.price !== undefined
      ? json.price
      : pkg.products.reduce((acc, cur) => acc + cur.price, 0);

  return save(pkg);
};

/**
 * Create
 */
router.post("/", parseBody(), validateBody(pkgSchema), async (ctx: Context) => {
  const pkg = await saveFromBody(ctx, new Package());
  ctx.body = pkg;
});

/**
 * Update
 */
router.put(
  "/:id",
  parseBody(),
  validateParams(idSchema),
  validateBody(pkgSchema),
  async (ctx: Context) => {
    const pkg = await findById(ctx.params.id);
    const updatedPkg = await saveFromBody(ctx, pkg);
    ctx.body = updatedPkg;
  }
);

/**
 * Delete
 */
router.delete("/:id", validateParams(idSchema), async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  const deletedPkg = await remove(pkg);
  ctx.body = deletedPkg;
});

export default router;
export { prefix };
