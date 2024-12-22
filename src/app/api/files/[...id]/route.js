import fs from "fs";
import path from "path";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const fileName = id?.[0];

    if (!fileName || fileName.includes("..") || fileName.includes("/")) {
      return new Response(JSON.stringify({ error: "Invalid file name." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const postsDirectory = path.join(process.cwd(), "posts");

    if (!fs.existsSync(postsDirectory)) {
      return new Response(
        JSON.stringify({ error: "Posts directory does not exist." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const filePath = path.join(postsDirectory, fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return new Response(
        JSON.stringify({ message: "File deleted successfully!" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "File not found." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    return new Response(JSON.stringify({ error: "Error deleting file." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
