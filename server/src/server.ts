import app from "./app";
import { initDevConnection } from "./db";
import { cacheRates } from "./services/currency.service";

// Wait for the global DB connection and exchange rates, and start server
const startServer = async (): Promise<void> => {
  await Promise.all([initDevConnection(), cacheRates()]);
  app.listen(3001);
};

startServer();
