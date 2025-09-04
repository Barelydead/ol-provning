import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export async function GET() {
  try {
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : { scores: [] };

    return new Response(JSON.stringify(fileData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, scores } = body;

    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : { scores: [] };

    fileData.scores.push({ name, scores });

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    return new Response(JSON.stringify({ success: true, data: fileData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}