import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column({ type: "simple-json", nullable: true })
  products: { id: string; name: string; usdPrice: number }[];

  @Column()
  price: number;
}
