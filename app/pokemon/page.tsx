import { SpanStatusCode, trace } from "@opentelemetry/api";

export async function getPokemonData() {
  return await trace
    .getTracer("pokedex-next-app")
    .startActiveSpan("getPokemonData", async (span) => {
      // Generate random pokemon ID
      const randomId = Math.floor(Math.random() * 898) + 1;

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

      if (!res.ok) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: String(res.statusText),
        });
        span.end();
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const { name, id } = await res.json();
      span.setStatus({
        code: SpanStatusCode.OK,
        message: String("Pokemon fetched successfully!"),
      });
      span.setAttribute("pokemon.id", id);
      span.setAttribute("pokemon.name", name);
      span.end();

      return { id, name };
    });
}

export default async function Pokemon() {
  const data = await getPokemonData();

  return (
    <main className="flex flex-col items-center justify between p-24">
      <h1>Hola pokemon</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
