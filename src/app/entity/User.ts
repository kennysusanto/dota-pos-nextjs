import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
    })
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

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
