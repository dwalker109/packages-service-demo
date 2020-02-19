import * as Router from "@koa/router";
import { Context } from "koa";
import * as koaBody from "koa-body";
import { Package } from "../entities/Package";
import { findAll, findById, remove, save } from "./packages.repo";

const router: Router = new Router();

const prefix = "/packages";
router.prefix(prefix);

router.get("/", async (ctx: Context) => {
  const packages = await findAll();
  ctx.body = packages;
});

router.get("/:id", async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  ctx.body = pkg;
});

router.post("/", koaBody(), async (ctx: Context) => {
  const pkg = await saveFromBody(ctx, new Package());
  ctx.body = pkg;
});

router.put("/:id", koaBody(), async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  const updatedPkg = await saveFromBody(ctx, pkg);
  ctx.body = updatedPkg;
});

router.delete("/:id", async (ctx: Context) => {
  const pkg = await findById(ctx.params.id);
  const deletedPkg = await remove(pkg);
  ctx.body = deletedPkg;
});

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
