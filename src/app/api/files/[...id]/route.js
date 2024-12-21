export async function DELETE(req, { params }) {
  try {
    const fileName = params.id?.[0];

    if (!fileName) {
      return new Response(JSON.stringify({ error: "File name is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const postsDirectory = path.join(process.cwd(), "posts");
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
