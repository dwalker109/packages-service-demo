import { getConnection } from "typeorm";
import { Package } from "../src/entities/Package";

const seedPackages = () =>
  getConnection()
    .createQueryBuilder()
    .insert()
    .into(Package)
    .values([
      {
        name: "Test pkg 1",
        description: "Test pkg 1 desc",
        price: 100
      },
      {
        name: "Test pkg 2",
        description: "Test pkg 2 desc",
        price: 100
      },
      {
        name: "Test pkg 3",
        description: "Test pkg 3 desc",
        price: 100
      },
      {
        name: "Test pkg 4",
        description: "Test pkg 4 desc",
        price: 100
      },
      {
        name: "Test pkg 5",
        description: "Test pkg 5 desc",
        price: 100
      }
    ])
    .execute();

export default () => Promise.all([seedPackages()]);
