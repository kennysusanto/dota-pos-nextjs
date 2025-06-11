import { NextResponse, NextRequest } from "next/server";
import { getPhotos, addPhoto } from "@/app/lib/data";
import { Photo } from "@/app/entity/Photo";

export async function GET(request: NextRequest) {
    try {
        const results = await getPhotos();
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

export async function POST(request: NextRequest, { params }: { params: Promise<{ photo: Photo }> }) {
    try {
        const photo: Photo = await request.json();
        const results = await addPhoto(photo);
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
