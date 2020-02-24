import app from "./app";
import { initDevConnection } from "./db";
import { cacheRates } from "./services/currency.service";
import runSeeder, { shouldSeed } from "../db/dev-seeder";

// Wait for the global DB connection and exchange rates, and start server
const startServer = async (): Promise<void> => {
  await Promise.all([initDevConnection(), cacheRates()]);

  // Seed the dev data if necessary
  if (await shouldSeed()) {
    await runSeeder();
  }

  app.listen(3001);
};

startServer();
