import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sessionid: number;

    @Column()
    itemid: number;

    @Column()
    itemqty: number;

    @Column({
        type: "datetime",
        default: () => "NOW()",
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
