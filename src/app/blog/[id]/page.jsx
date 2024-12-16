import fs from "fs";

export async function generateStaticParams() {
  const posts = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default function BlogPost({ params }) {
  const posts = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"));
  const post = posts.find((p) => p.id === Number(params.id));
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
