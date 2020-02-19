import app from "./app";
import { initDevConnection } from "./db";

// Wait for the global DB connection and start server
const startServer = async () => {
  await initDevConnection();
  app.listen(3000);
};

startServer();
