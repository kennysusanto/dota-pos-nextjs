import "reflect-metadata";
import { GetDBSettings, IDBSettings } from "@/shared/common";
import { DataSource } from "typeorm";
import { Photo } from "@/entity/Photo";
import { User } from "@/entity/User";
import { Cart } from "@/entity/Cart";
import { Item } from "@/entity/Item";
import { Session } from "@/entity/Session";
import { Feature } from "@/entity/Feature";
import { Role } from "@/entity/Role";
import { Tenant } from "@/entity/Tenant";

let connectionParams = GetDBSettings();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: connectionParams.host,
    port: connectionParams.port,
    username: connectionParams.user,
    password: connectionParams.password,
    database: connectionParams.database,
    synchronize: true,
    logging: true,
    entities: [Cart, Feature, Item, Photo, Role, Session, Tenant, User],
    subscribers: [],
    migrations: [],
});

export async function initializeDatabase() {
    if (!AppDataSource.isInitialized) {
        try {
            console.log("Initializing Data Source");
            await AppDataSource.initialize();
            console.log("Data Source has been initialized!");
        } catch (err) {
            console.error("Error during Data Source initialization", err);
            throw err;
        }
    }
}
