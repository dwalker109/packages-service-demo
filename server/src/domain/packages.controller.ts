import * as Router from "@koa/router";
import { Context } from "koa";
import * as parseBody from "koa-body";
import { Package } from "../entities/Package";
import { validateBody, validateParams } from "../middleware/rest-validate";
import { findAll, findById, remove, save } from "./packages.repo";
import { idParamSchema, pkgSchema } from "./packages.schemas";

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

/**
 * Utility func to perform the actual save
 */
const saveFromBody = async (ctx: Context, pkg: Package): Promise<Package> => {
  const {
    request: { body: json },
  } = ctx;

  pkg.name = json.name;
  pkg.description = json.description;
  pkg.price = json.price;

  return save(pkg);
};

export default router;
export { prefix };
