import * as Router from "@koa/router";
import { Context } from "koa";
import { findAll, findById } from "./packages.repo";

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

// router.post("/", (ctx: Context, next: Next) => {});
// router.put("/:id", (ctx: Context, next: Next) => {});
// router.delete("/:id", (ctx: Context, next: Next) => {});

export default router;
export { prefix };
