import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Item } from "@/entity/Item";
import { Session } from "@/entity/Session";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Session, (session) => session.carts)
    session: Session;

    @ManyToOne(() => Item, (item) => item.carts)
    item: Item;

    @Column({
        nullable: false,
    })
    itemqty: number;

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
