"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoMdRefreshCircle } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
export default function AdminDashboard() {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [fileToDelete, setFileToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched files:", data);
        setFiles(data);
      })
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  const handleFileCreation = async () => {
    if (!fileName.trim()) {
      setMessage("Naziv datoteke ne može biti prazan!");
      return;
    }

    const sanitizedFileName = fileName.replace(/\s+/g, "-").toLowerCase();
    const fileContent = `---\n
title: "${title}"\n
subtitle: "${subtitle}"\n
date: "${new Date().toISOString().split("T")[0]}"\n
image: "${image || "/images/default.jpg"}"\n
---\n
${content}`;

    const fileNameWithExtension = `${sanitizedFileName}.md`;

    const response = await fetch("/api/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: fileNameWithExtension,
        content: fileContent,
      }),
    });

    if (response.ok) {
      setMessage("Datoteka uspješno kreirana!");
      setFileName("");
      setTitle("");
      setSubtitle("");
      setImage("");
      setContent("");
      fetchFiles();
    } else {
      setMessage("Greška pri kreiranju datoteke.");
    }
  };

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/files");
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  };
  const applyFormatting = (type) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (!selectedText) return;

    const formattedText = {
      bold: `**${selectedText}**`,
      italic: `*${selectedText}*`,
      underline: `<u>${selectedText}</u>`,
      color: `<span style="color: red;">${selectedText}</span>`,
    }[type];

    setContent(content.replace(selectedText, formattedText));
  };

  const insertImage = () => {
    const imageUrl = prompt("Dodajte link vaše slike:");
    if (imageUrl) {
      setContent(`${content}\n\n![Opis slike](${imageUrl})\n\n`);
    }
  };

  const handleDeleteFile = async (fileSlug) => {
    try {
      await fetch(`/api/files/${fileSlug}.md`, {
        method: "DELETE",
      });
      fetchFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleDeleteFileWithConfirmation = (fileSlug) => {
    setFileToDelete(fileSlug);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    if (!fileToDelete) return;

    await handleDeleteFile(fileToDelete);

    setShowDeleteConfirmation(false);
    setFileToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setFileToDelete(null);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen">
      <div className="flex xl:flex-row flex-col xl:mt-0 mt-14 text-center items-center">
        <RiAdminFill className="text-white size-16 mr-4" />

        <h1 className="text-5xl font-bold mt-8 font-playwrite-hr text-white mb-8">
          Admin Dashboard
        </h1>
      </div>
      <div className="flex xl:justify-start justify-center p-4 my-4 text-center items-center text-green-400 border border-green-400 border-opacity-50 shadow-xl flex-wrap">
        <FiInfo className="text-2xl xl:mr-4 mr-0 xl:mb-0 mb-4" />
        <p className="text-sm md:text-base lg:text-lg">
          Za kreiranje objave morate ispuniti navedena polja, te pritisnuti
          dugme{" "}
          <span className="text-orange-400 font-bold">"KREIRAJ OBJAVU"</span>.
        </p>
      </div>

      {/* New Post Form */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">
          Kreiraj novu objavu
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ime datoteke (bez razmaka)"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Naslov objave"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Podnaslov objave"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="URL slike (opcionalno)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Formatting Buttons */}
          <div className="flex flex-wrap gap-4">
            {["bold", "italic", "underline", "color"].map((style) => (
              <button
                key={style}
                onClick={() => applyFormatting(style)}
                className="bg-gray-600 text-white p-3 rounded-md hover:bg-blue-500 transition-colors focus:outline-none"
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </button>
            ))}
            <button
              onClick={insertImage}
              className="bg-gray-600 text-white p-3 rounded-md hover:bg-blue-500 transition-colors focus:outline-none"
            >
              Umetni sliku
            </button>
          </div>

          {/* Textarea for Content */}
          <textarea
            placeholder="Napišite sadržaj objave ovde..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="10"
          ></textarea>

          <button
            onClick={handleFileCreation}
            className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none"
          >
            Kreiraj objavu
          </button>

          {message && <p className="mt-4 text-red-400">{message}</p>}
        </div>
      </div>

      {/* File List Section */}
      <div className="mt-8">
        <h2 className="text-4xl font-semibold text-white">Dostupne datoteke</h2>
        <div className="flex xl:justify-start justify-center p-4 my-4 text-center items-center text-green-400 border border-green-400 border-opacity-50 shadow-xl flex-wrap">
          <FiInfo className="text-2xl md:text-3xl mr-4" />
          <p className="text-sm md:text-base lg:text-lg">
            Za prvobitni prikaz morate pritisnuti dugme za učitavanje ispod.
          </p>
        </div>
        <div className="flex xl:justify-start justify-center py-10">
          <IoMdRefreshCircle
            className="cursor-pointer hover:text-white transition-all duration-150 xl:mb-0 mb-4 text-blue-500 size-16"
            onClick={fetchFiles}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-white">Učitavanje fajlova...</p>
          ) : files?.length > 0 ? (
            files.map((file) => {
              const { image, title, subtitle, date, slug } = file;
              const formattedDate = new Date(date).toLocaleDateString();

              return (
                <div
                  key={slug}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      alt={title || "Slika objave"}
                      src={image || "/images/default.jpg"}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-600 bg-opacity-75 text-white text-sm px-3 py-1 rounded-tr-lg">
                      {formattedDate}
                    </div>
                    <div
                      onClick={() => handleDeleteFileWithConfirmation(slug)}
                      className="absolute bottom-2 right-2 p-2 bg-gray-800 rounded-sm text-red-500 cursor-pointer"
                    >
                      <FaTrashAlt size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {title || "Bez naslova"}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {subtitle || "Nema dostupnog podnaslova"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white">Nema dostupnih datoteka.</p>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Jeste li sigurni da želite obrisati ovu datoteku?
            </h3>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-colors"
              >
                Da, obriši
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-600 text-white p-3 rounded-md hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
