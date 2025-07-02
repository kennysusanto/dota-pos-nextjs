import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "@/entity/User";

@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @OneToMany(() => User, (user) => user.tenant)
    users: User[];

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
