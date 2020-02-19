import { getConnection } from "typeorm";
import runSeeder from "../../db/test-seeder";
import { initTestConnection } from "../db";
import { Package } from "../entities/Package";
import { findAll, findById, save } from "./packages.repo";

beforeAll(async () => {
  await initTestConnection();
  await runSeeder();
});

afterAll(async () => {
  await getConnection().close();
});

describe("Package reading", () => {
  it("Can list all existing packages", async () => {
    const records = await findAll();
    expect(records.length).toBe(5);
  });

  it("Can retrieve a specific package by id", async () => {
    const record = await findById(1);
    expect(record).toBeDefined();
    expect(record.name).toBe("Test pkg 1");
  });
});

describe("Package creation", () => {
  it("Can save a new package", async () => {
    const newPackage = new Package();
    newPackage.name = "New package";
    newPackage.description = "New package desc";
    newPackage.price = 200;
    await save(newPackage);
    expect(newPackage.id).toBeTruthy();
  });

  it("Can update an existing package", async () => {
    const origRecord = await findById(1);
    origRecord.name = "Amended";
    await save(origRecord);
    const updatedRecord = await findById(1);
    expect(updatedRecord.name).toBe("Amended");
    expect(updatedRecord).toEqual(origRecord);
  });
});
