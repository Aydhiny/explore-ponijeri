import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export async function GET() {
  try {
    const files = fs.readdirSync(postsDirectory);
    return new Response(JSON.stringify({ files }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error reading files." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const { fileName, content } = await req.json();
    const filePath = path.join(postsDirectory, fileName);
    fs.writeFileSync(filePath, content);
    return new Response(
      JSON.stringify({ message: "File created successfully." }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error writing file." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
