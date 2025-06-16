import { NextResponse, NextRequest } from "next/server";
import { getUsers, addUser } from "@/app/lib/data";
import { User } from "@/app/entity/User";

export async function GET(request: Request) {
    try {
        const results = await getUsers();
        return NextResponse.json(results);
    } catch (err) {
        console.log("ERROR: API - ", (err as Error).message);

        const response = {
            error: (err as Error).message,

            returnedStatus: 200,
        };

        return NextResponse.json(response, { status: 200 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const user: User = await request.json();
        const results = await addUser(user);
        return NextResponse.json(results);
    } catch (err) {
        console.log("ERROR: API - ", (err as Error).message);

        const response = {
            error: (err as Error).message,

            returnedStatus: 200,
        };

        return NextResponse.json(response, { status: 200 });
    }
}
