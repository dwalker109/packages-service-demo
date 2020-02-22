import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../services/products.service";

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column({ type: "simple-json", nullable: true })
  products: Product[];

  @Column()
  price: number;
}
