import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="p-12 text-gray-700 m-8 border-2 border-blue-600 border-opacity-50 shadow-xl rounded-sm bg-white">
      <div className="flex bg-gray-100 border border-gray-600 border-opacity-50 py-2 my-2 shadow-md font-bold text-xl">
        <Link className="mx-1" href="/blog">
          Blog
        </Link>
        <p className="mr-1">{">"}</p>
        <Link className="text-main-color-lighter-green" href={`/blog/${slug}`}>
          {post.data.title}
        </Link>
      </div>
      <h1 className="text-6xl font-playwrite-hr pt-12 font-bold">
        {post.data.title}
      </h1>

      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
