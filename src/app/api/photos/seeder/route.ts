import { NextResponse, NextRequest } from "next/server";
import { addPhotoSeed } from "@/app/lib/data";

export async function POST(request: NextRequest) {
    try {
        const results = await addPhotoSeed();
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
