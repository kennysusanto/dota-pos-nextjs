import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, UsingJoinTableIsNotAllowedError } from "typeorm";
import { Tenant } from "@/entity/Tenant";
import { Role } from "@/entity/Role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
        nullable: false,
    })
    username: string;

    @Column({
        nullable: false,
    })
    password: string;

    @Column({
        nullable: false,
    })
    firstname: string;

    @Column({
        nullable: false,
    })
    lastname: string;

    @ManyToOne(() => Tenant, (tenant) => tenant.users)
    tenant: Tenant;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];

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
