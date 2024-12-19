"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFilter } from "react-icons/fa"; // Import the filter icon

// Client-side component to handle sorting/filtering
export default function ClientSideFilter({ postsData }) {
  const [sortOrder, setSortOrder] = useState("newest-oldest");
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  // Filter function for sorting
  useEffect(() => {
    const sorted = [...postsData].sort((a, b) => {
      if (sortOrder === "newest-oldest") {
        return b.date - a.date; // Newest to Oldest
      } else {
        return a.date - b.date; // Oldest to Newest
      }
    });
    setFilteredPosts(sorted);
  }, [sortOrder, postsData]);

  const postPreviews = filteredPosts.map((post) => {
    // Ensure post.date is valid before calling toLocaleDateString()
    const formattedDate =
      post.date instanceof Date && !isNaN(post.date)
        ? post.date.toLocaleDateString()
        : "Date not available"; // Fallback text in case of invalid date

    return (
      <div
        key={post.slug}
        className="w-96 h-96 mx-auto shadow-lg rounded-lg overflow-hidden bg-white transform transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 m-4"
      >
        <Link href={`/blog/${post.slug}`}>
          {/* Image Section */}
          <div className="relative h-1/2">
            <Image
              alt={post.title}
              src={post.image}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-blue-600 bg-opacity-75 text-white text-sm px-3 py-1 rounded-tr-lg">
              {formattedDate}
            </div>
          </div>

          {/* Content Section */}
          <div className="h-1/2 p-4 flex flex-col justify-between">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {post.subtitle}
            </p>
            <div className="text-blue-600 font-semibold">Read More →</div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="px-6 sm:px-12 lg:px-24 text-center py-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-playwrite-hr font-bold text-gray-700">
        Dobrodošli na Blog Ponijeri!
      </h1>

      {/* Sorting ComboBox with Filter Icon */}
      <div className="relative inline-block mb-8">
        <button
          className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
          onClick={() =>
            setSortOrder((prev) =>
              prev === "newest-oldest" ? "oldest-newest" : "newest-oldest"
            )
          }
        >
          <FaFilter className="mr-2 text-lg" />
          <span>
            {sortOrder === "newest-oldest"
              ? "Najnovije do najstarije"
              : "Najstarije do najnnovije"}
          </span>
        </button>

        {/* Optionally, you can wrap this in a dropdown-style component if desired */}
      </div>

      {/* Post Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {postPreviews}
      </div>
    </div>
  );
}
