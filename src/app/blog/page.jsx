import React from "react";
import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default function Page() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div className="shadow-sm text-start rounded-md cursor-pointer hover:shadow-2xl transition-all duration-150 border-2 border-blue-600 border-opacity-50 m-4 p-12 flex flex-col bg-gradient-to-t from-gray-100 to-white">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-4xl font-bold text-gray-600">{post.title}</h2>
        <p className="text-xl font-bold text-gray-600">{post.subtitle}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  ));
  return (
    <div className="px-24 bg-slate-500 bg-opacity-50 text-center py-12">
      <h1 className="text-6xl mb-12 font-playwrite-hr font-bold text-gray-700">
        Dobrodošli na Blog Ponijeri!
      </h1>
      <div className="grid grid-cols-3">{postPreviews}</div>
    </div>
  );
}
