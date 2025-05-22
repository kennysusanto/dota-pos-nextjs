import { NextResponse, NextRequest } from "next/server";
import { getUsers } from "@/app/lib/data";

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
