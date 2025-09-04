import { db } from "@/lib/db";

export async function GET() {
  try {
    const result = await db.execute("SELECT * FROM scores");
    return new Response(JSON.stringify({ scores: result.rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, scores } = await req.json();

    await db.execute({
      sql: "INSERT INTO scores (name, scores) VALUES (?, ?)",
      args: [name, JSON.stringify(scores)],
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
}