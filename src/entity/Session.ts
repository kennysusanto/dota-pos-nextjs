import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cart } from "@/entity/Cart";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    tablenumber: number;

    @OneToMany(() => Cart, (cart) => cart.session)
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
