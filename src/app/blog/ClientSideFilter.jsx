"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUp, FaArrowDown, FaPen, FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientSideFilter({ postsData }) {
  const postsPerPage = 6;
  const [sortOrder, setSortOrder] = useState("newest-oldest");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  useEffect(() => {
    const sorted = [...postsData].sort((a, b) =>
      sortOrder === "newest-oldest" ? b.date - a.date : a.date - b.date
    );
    setFilteredPosts(sorted);
    setCurrentPage(1);
  }, [sortOrder, postsData]);

  const indexOfLast = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfLast - postsPerPage, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #001f3f 50%, #002F5A 100%)" }}
      >
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(0,132,255,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 mb-6"
            style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
          >
            <FaPen className="text-xs" />
            Vijesti i priče
          </span>
          <h1 className="font-playwrite-hr text-4xl sm:text-6xl font-bold text-white mb-4">
            Blog{" "}
            <span style={{
              background: "linear-gradient(135deg, #0084FF, #4fa8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Ponijeri</span>
          </h1>
          <p className="text-white/60 text-lg">
            Najnovije vijesti, priče i savjeti iz srca planine.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-gray-500 text-sm">
          Prikazano <span className="font-semibold text-main-color-dark-green">{filteredPosts.length}</span> objava
        </p>

        <button
          onClick={() => setSortOrder(s => s === "newest-oldest" ? "oldest-newest" : "newest-oldest")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            background: "rgba(0,132,255,0.08)",
            border: "1px solid rgba(0,132,255,0.15)",
            color: "#002F5A",
          }}
        >
          {sortOrder === "newest-oldest" ? <FaArrowDown className="text-xs" /> : <FaArrowUp className="text-xs" />}
          {sortOrder === "newest-oldest" ? "Najnovije" : "Najstarije"}
        </button>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {currentPosts.map((post, i) => {
              const formattedDate =
                post.date instanceof Date && !isNaN(post.date)
                  ? post.date.toLocaleDateString("bs-BA")
                  : "";

              return (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <div
                      className="h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(0,132,255,0.1)",
                        boxShadow: "0 4px 20px rgba(0,47,90,0.06)",
                      }}
                    >
                      {/* Image */}
                      {post.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            alt={post.title}
                            src={post.image}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          {formattedDate && (
                            <div
                              className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white text-xs font-medium"
                              style={{ background: "rgba(0,132,255,0.7)", backdropFilter: "blur(8px)" }}
                            >
                              <FaCalendarAlt className="text-xs" />
                              {formattedDate}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5">
                        <h2 className="font-jakarta font-bold text-main-color-dark-green text-base mb-2 line-clamp-2 group-hover:text-main-color-lighter-green transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.subtitle}
                        </p>
                        <div
                          className="text-main-color-lighter-green text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          Pročitajte više
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-40"
              style={{
                background: "rgba(0,132,255,0.08)",
                border: "1px solid rgba(0,132,255,0.15)",
                color: "#002F5A",
              }}
            >
              ← Prije
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className="w-9 h-9 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: num === currentPage ? "linear-gradient(135deg, #0084FF, #005fcc)" : "rgba(0,132,255,0.06)",
                  border: num === currentPage ? "none" : "1px solid rgba(0,132,255,0.12)",
                  color: num === currentPage ? "#ffffff" : "#002F5A",
                }}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-40"
              style={{
                background: "rgba(0,132,255,0.08)",
                border: "1px solid rgba(0,132,255,0.15)",
                color: "#002F5A",
              }}
            >
              Poslije →
            </button>
          </div>
        )}

        {/* Add post link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(0,132,255,0.08)",
              border: "1px solid rgba(0,132,255,0.15)",
              color: "#002F5A",
            }}
          >
            <FaPen className="text-xs text-main-color-lighter-green" />
            Dodaj novu objavu
          </Link>
        </div>
      </div>
    </div>
  );
}
