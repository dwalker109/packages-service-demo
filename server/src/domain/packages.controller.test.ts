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
});

afterAll(async () => {
  await getConnection().close();
});

beforeEach(async () => {
  await getConnection().synchronize(true);
  await runSeeder();
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
    expect(response.body).toMatchObject<Package>({
      id: 1,
      name: "Test pkg 1",
      description: "Test pkg 1 desc",
      products: null,
      price: 100,
    });
  });
});

describe("Packages write", () => {
  it("Can create a new package", async () => {
    const response: request.Response = await request(server)
      .post(prefix)
      .send({
        name: "Posted package 1",
        description: "Posted package desc 1",
        price: 99,
      });
    expect(response.status).toBe(200);
    expect(response.body.id).toBeTruthy();
  });

  it("Can update an existing package", async () => {
    const origResponse: request.Response = await request(server).get(
      `${prefix}/1`
    );
    const origData = origResponse.body;

    const newData = {
      name: "Updated package",
      description: "Updated package desc",
      price: 678,
    };
    const updatedResponse = await request(server)
      .put(`${prefix}/${origData.id}`)
      .send(newData);

    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.body.id).toBe(origData.id);
    expect(updatedResponse.body).toMatchObject(newData);
  });
});

describe("Packages delete", () => {
  it("Can delete an existing package", async () => {
    const delResponse: request.Response = await request(server).delete(
      `${prefix}/1`
    );
    expect(delResponse.status).toBe(200);

    const updatedResponse: request.Response = await request(server).get(prefix);
    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.type).toBe("application/json");
    expect(updatedResponse.body.length).toBe(4);
  });
});
