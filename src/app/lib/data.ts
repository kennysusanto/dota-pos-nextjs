// import mysql from "mysql2/promise";
// import { GetDBSettings, IDBSettings } from "@/shared/common";
// import { IUser, User } from "./model";
import { Photo } from "../entity/Photo";
import { User } from "@/app/entity/User";
import { AppDataSource, initializeDatabase } from "../data-source";
// import { NextResponse, NextRequest } from "next/server";

// let connectionParams = GetDBSettings();

// export async function getUsers(): Promise<User[]> {
//     const connection = await mysql.createConnection(connectionParams);
//     let get_exp_query = "";
//     get_exp_query = "SELECT * FROM user";
//     let values: User[] = [];
//     const [results, fields] = await connection.execute<IUser[]>(get_exp_query, values);
//     connection.end();

//     // const result = results.map((o) => new User(o));
//     const usersList: User[] = [];
//     for (let row of results) {
//         usersList.push(new User(row));
//     }

//     return usersList;
// }

// export async function addUser(user: User): Promise<number> {
//     return 1;
// }

// user

export async function getUsers(): Promise<User[]> {
    await initializeDatabase();
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    console.log("Users from the db: ", users);
    return users;
}

export async function getUser(id: number): Promise<User | null> {
    await initializeDatabase();
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({
        id: id,
    });
    console.log("User from the db: ", user);
    return user;
}

export async function addUser(user: User): Promise<number> {
    await initializeDatabase();
    const userRepo = AppDataSource.getRepository(User);

    const savedUser: User = await userRepo.save(user);
    console.log("User has been saved");
    return savedUser.id;
}

// photo

export async function getPhotos(): Promise<Photo[]> {
    await initializeDatabase();
    const photoRepository = AppDataSource.getRepository(Photo);
    const savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);
    return savedPhotos;
}

export async function getPhoto(id: number): Promise<Photo | null> {
    await initializeDatabase();
    const photoRepository = AppDataSource.getRepository(Photo);
    const firstPhoto = await photoRepository.findOneBy({
        id: id,
    });
    console.log("First photo from the db: ", firstPhoto);
    return firstPhoto;
}

export async function addPhotoSeed(): Promise<number> {
    await initializeDatabase();
    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    const photoRepository = AppDataSource.getRepository(Photo);

    await photoRepository.save(photo);
    console.log("Photo has been saved");
    return 1;
}

export async function addPhoto(photo: Photo): Promise<number> {
    await initializeDatabase();
    const photoRepository = AppDataSource.getRepository(Photo);

    const savedPhoto: Photo = await photoRepository.save(photo);
    console.log("Photo has been saved");
    return savedPhoto.id;
}
