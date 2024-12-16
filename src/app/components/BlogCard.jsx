import Image from "next/image";
import React from "react";
export default function BlogCard({ title, description, image }) {
  return (
    <div className="shadow-sm rounded-md cursor-pointer hover:shadow-2xl transition-all duration-150 border-2 border-blue-600 border-opacity-50 m-4 p-24 flex flex-col bg-gradient-to-t from-gray-100 to-white">
      <Image alt={title} src={image} width={200} height={200} />
      <h1 className="text-4xl font-bold text-gray-600">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}
