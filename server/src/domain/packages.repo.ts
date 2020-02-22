import { getRepository, Repository } from "typeorm";
import { Package } from "../entities/Package";

const pr = (): Repository<Package> => getRepository(Package);

/**
 * Retrieve all items
 */
const findAll = (): Promise<Package[]> => pr().find();

/**
 * Retrieve a single item by id
 */
const findById = (id: number): Promise<Package> => pr().findOne({ id });

/**
 * Persist an item
 */
const save = (pkg: Package): Promise<Package> => pr().save(pkg);

/**
 * Remove an item
 */
const remove = (pkg: Package): Promise<Package> => pr().remove(pkg);

export { findAll, findById, save, remove };
