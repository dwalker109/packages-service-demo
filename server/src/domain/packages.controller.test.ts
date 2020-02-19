import * as request from "supertest";
import { getConnection } from "typeorm";
import runSeeder from "../../db/test-seeder";
import app from "../app";
import { initTestConnection } from "../db";
import { Package } from "../entities/Package";
import { prefix } from "./packages.controller";

const server = app.callback();

beforeAll(async () => {
  await initTestConnection();
  await runSeeder();
});

afterAll(async () => {
  await getConnection().close();
});

describe("Packages read", () => {
  it("Can index existing packages", async () => {
    const response: request.Response = await request(server).get(prefix);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.length).toBe(5);
  });

  it("Can retrieve a specific package", async () => {
    const response: request.Response = await request(server).get(`${prefix}/1`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toMatchObject<Package>({
      id: 1,
      name: "Test pkg 1",
      description: "Test pkg 1 desc",
      products: null,
      price: 100
    });
  });
});
