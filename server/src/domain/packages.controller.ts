import * as Router from "@koa/router";
import { Context } from "koa";
import * as parseBody from "koa-body";
import { Package } from "../entities/Package";
import { validateBody, validateParams } from "../middleware/rest-validate";
import { findAll, findById, remove, save } from "./packages.repo";
import { idParamSchema, pkgSchema } from "./packages.schemas";
import { getProducts } from "../services/products.service";

const prefix = "/packages";

const router: Router = new Router();
router.prefix(prefix);

/**
 * Index
 */
router.get("/", async (ctx: Context) => {
  const packages = await findAll();
  ctx.body = packages;
});

/**
 * Read
 */
router.get("/:id", validateParams(idParamSchema), async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  ctx.body = pkg;
});

/**
 * Utility func to perform the actual save
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
      : pkg.products.reduce((acc, cur) => acc + cur.usdPrice, 0);

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
  validateParams(idParamSchema),
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
router.delete("/:id", validateParams(idParamSchema), async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  const deletedPkg = await remove(pkg);
  ctx.body = deletedPkg;
});

export default router;
export { prefix };
