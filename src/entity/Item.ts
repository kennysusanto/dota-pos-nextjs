import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cart } from "@/entity/Cart";
@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
    })
    price: number;

    @Column({
        nullable: false,
    })
    stock: number;

    @OneToMany(() => Cart, (cart) => cart.item)
    carts: Cart[];

    @Column({
        type: "datetime",
        default: () => "NOW()",
        nullable: false,
    })
    createdon: string;

    @Column({
        type: "datetime",
        nullable: true,
    })
    updatedon: string;

    @Column({
        type: "datetime",
        nullable: true,
    })
    deletedon: string;
}
