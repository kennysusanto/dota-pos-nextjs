import { NextResponse, NextRequest } from "next/server";
import { getPhoto } from "@/lib/data";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    try {
        const id = (await params).id;
        const results = await getPhoto(id);
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

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    // e.g. Delete photo with ID `id` in DB
    return new Response(null, { status: 204 });
}
