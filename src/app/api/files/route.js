import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function GET() {
  try {
    const files = fs.readdirSync(postsDirectory);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    const posts = markdownFiles.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const matterResult = matter(fileContents);

      return {
        title: matterResult.data.title,
        date: new Date(matterResult.data.date),
        subtitle: matterResult.data.subtitle,
        image: matterResult.data.image || "/images/default.jpg",
        slug: fileName.replace(".md", ""),
      };
    });

    return new Response(JSON.stringify({ files: posts }), {
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

    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory);
    }

    const filePath = path.join(postsDirectory, fileName);

    fs.writeFileSync(filePath, content, "utf8");

    return new Response(
      JSON.stringify({ message: "File created successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating file:", error);
    return new Response(JSON.stringify({ error: "Error creating file." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
