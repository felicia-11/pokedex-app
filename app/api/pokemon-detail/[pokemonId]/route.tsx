export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { pokemonId: string } }) {
    const { pokemonId } = params;
    let result = null;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        result = await res.json();
    } catch (error: any) {
        return new Response(`Error: ${error.message}`, { status: 400 });
    }

    return Response.json({ result });
};
