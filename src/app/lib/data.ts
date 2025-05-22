import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from "@/shared/common";
import { IUser, User } from "./model";

let connectionParams = GetDBSettings();

export async function getUsers(): Promise<User[]> {
    const connection = await mysql.createConnection(connectionParams);
    let get_exp_query = "";
    get_exp_query = "SELECT * FROM user";
    let values: User[] = [];
    const [results, fields] = await connection.execute<IUser[]>(get_exp_query, values);
    connection.end();

    // const result = results.map((o) => new User(o));
    const usersList: User[] = [];
    for (let row of results) {
        usersList.push(new User(row));
    }

    return usersList;
}

export async function addUser(user: User): Promise<number> {
    return 1;
}
