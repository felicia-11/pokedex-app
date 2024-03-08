import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    let result = null;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        result = await res.json();
    } catch (error: any) {
        return new Response(`Error: ${error.message}`, { status: 400 });
    }

    return Response.json({ result });
};
