import matter from "gray-matter";
import fs from "fs";

export default function ServerSideData() {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: new Date(matterResult.data.date),
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}
