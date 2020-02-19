import "reflect-metadata";
import { Connection, ConnectionOptions, createConnection } from "typeorm";

const initDevConnection = (): Promise<Connection> => {
  const options: ConnectionOptions = {
    type: "sqlite",
    entities: ["src/entities/**/*.ts"],
    synchronize: true,
    database: "db/dev.sqlite",
    logging: false
  };
  return createConnection(options);
};

const initTestConnection = async (): Promise<Connection> => {
  const options: ConnectionOptions = {
    type: "sqlite",
    synchronize: true,
    entities: ["src/entities/**/*.ts"],
    database: ":memory:",
    dropSchema: true,
    logging: false
  };
  return createConnection(options);
};

export { initDevConnection, initTestConnection };
