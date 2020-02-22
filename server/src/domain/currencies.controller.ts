import * as Router from "@koa/router";
import { Context } from "koa";
import { getAvailableRates } from "../services/currency.service";

const prefix = "/currencies";

const router: Router = new Router();
router.prefix(prefix);

/**
 * Index
 */
router.get("/", async (ctx: Context) => {
  const currencies = getAvailableRates();
  ctx.body = currencies;
});

export default router;
export { prefix };
