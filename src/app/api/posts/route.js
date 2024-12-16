import fs from "fs";
const filePath = "./data/posts.json";

export async function GET() {
  const posts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return new Response(JSON.stringify(posts), { status: 200 });
}

export async function POST(req) {
  const data = await req.json();
  const posts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const newPost = { id: Date.now(), ...data };
  posts.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  return new Response(JSON.stringify(newPost), { status: 201 });
}
