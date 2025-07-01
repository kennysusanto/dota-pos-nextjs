import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tablenumber: number;

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
