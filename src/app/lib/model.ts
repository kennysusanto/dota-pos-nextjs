import { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    createdon: Date;
    updatedon?: Date;
    deletedon?: Date;
}

export class User {
    id: number;
    firstname: string;
    lastname: string;
    createdon: Date;
    updatedon?: Date;
    deletedon?: Date;

    constructor(data: User) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.createdon = data.createdon;
        this.updatedon = data.updatedon;
        this.deletedon = data.deletedon;
    }
}
