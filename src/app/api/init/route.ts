import { db } from "@/lib/db";

export async function GET() {
  try {
    // Drop the table if it exists
    await db.execute("DROP TABLE IF EXISTS scores");

    // Create a fresh table
    await db.execute(`
      CREATE TABLE scores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        scores TEXT
      )
    `);

    return new Response(JSON.stringify({ success: true, message: "Table reset successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
