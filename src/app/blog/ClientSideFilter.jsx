"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";

export default function ClientSideFilter({ postsData }) {
  const postsPerPage = 4;
  const [sortOrder, setSortOrder] = useState("newest-oldest");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  useEffect(() => {
    const sorted = [...postsData].sort((a, b) => {
      if (sortOrder === "newest-oldest") {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    });
    setFilteredPosts(sorted);
  }, [sortOrder, postsData]);

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postPreviews = currentPosts.map((post) => {
    const formattedDate =
      post.date instanceof Date && !isNaN(post.date)
        ? post.date.toLocaleDateString()
        : "Date not available";

    return (
      <div
        key={post.slug}
        className="w-full sm:w-96 lg:w-96 h-auto mx-auto shadow-lg rounded-lg overflow-hidden bg-white transform transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 m-4"
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

  // Pagination Controls
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      </div>

      {/* Post Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {postPreviews}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 my-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Prije
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 ${
              number === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-600 hover:text-white transition-all duration-300`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Poslije
        </button>
      </div>

      {/* Add Post Button */}
      <Link
        href="/login"
        className="flex w-fit items-center px-4 py-2 my-8 bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        Dodajte novu objavu
      </Link>
    </div>
  );
}
