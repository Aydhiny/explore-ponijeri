"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AdminDashboard() {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => {
        if (data.files && Array.isArray(data.files)) {
          setFiles(data.files);
        } else {
          console.error("Error: Invalid file data structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  const handleFileCreation = async () => {
    // Ensure no spaces in file name
    const sanitizedFileName = fileName.replace(/\s+/g, "-").toLowerCase();
    const fileContent = `---\n
title: "${title}"\n
subtitle: "${subtitle}"\n
date: "${new Date().toISOString().split("T")[0]}"\n
image: "${image || "/images/default.jpg"}"\n
---\n
${content}`;

    const fileNameWithExtension = `${sanitizedFileName}.md`; // Ensure the .md extension

    const response = await fetch("/api/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: fileNameWithExtension,
        content: fileContent,
      }),
    });

    if (response.ok) {
      setMessage("File created successfully!");
      setFileName("");
      setTitle("");
      setSubtitle("");
      setImage("");
      setContent("");
      fetchFiles();
    } else {
      setMessage("Error creating file.");
    }
  };

  const fetchFiles = () => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => setFiles(data.files));
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
      setContent(`${content}\n\n![Image Description](${imageUrl})\n\n`);
    }
  };

  return (
    <div className="p-6 bg-gray-500">
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Dashboard</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">
          Kreirajte novi blog file
        </h2>
        <input
          type="text"
          placeholder="Naziv fajla (bez razmaka)..."
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Naslov posta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Podnaslov posta"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="URL slike (ako želite sliku kao pozadinu)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <div className="mb-2">
          <button
            onClick={() => applyFormatting("bold")}
            className="bg-gray-200 p-2 rounded mr-2 hover:bg-blue-500 transition-colors"
          >
            Bold
          </button>
          <button
            onClick={() => applyFormatting("italic")}
            className="bg-gray-200 p-2 rounded mr-2 hover:bg-blue-500 transition-colors"
          >
            Italic
          </button>
          <button
            onClick={() => applyFormatting("underline")}
            className="bg-gray-200 p-2 rounded mr-2 hover:bg-blue-500 transition-colors"
          >
            Underline
          </button>
          <button
            onClick={() => applyFormatting("color")}
            className="bg-gray-200 p-2 rounded mr-2 hover:bg-blue-500 transition-colors"
          >
            Text Color
          </button>
          <button
            onClick={insertImage}
            className="bg-gray-200 p-2 rounded hover:bg-blue-500 transition-colors"
          >
            Insert Image
          </button>
        </div>
        <textarea
          placeholder="Pišite svoj blog ovdje..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded w-full mb-2"
          rows="10"
        ></textarea>
        <button
          onClick={handleFileCreation}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Kreiraj fajl
        </button>
        {message && <p className="mt-2 text-green-500">{message}</p>}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Dostupni fajlovi
        </h2>
        <div className="flex flex-wrap">
          {files.length > 0 ? (
            files.map((file) => {
              const { image, title, subtitle, date } = file;
              const formattedDate = new Date(date).toLocaleDateString();

              return (
                <div
                  key={file.title}
                  className="w-96 h-auto mx-auto shadow-lg rounded-lg overflow-hidden bg-white transform transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 m-4"
                >
                  <div className="relative h-48">
                    <Image
                      alt={title || "Post Image"}
                      src={image || "/images/default.jpg"}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-600 bg-opacity-75 text-white text-sm px-3 py-1 rounded-tr-lg">
                      {formattedDate}
                    </div>
                  </div>

                  <div className="h-48 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                      {title || "Untitled"}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {subtitle || "No subtitle available"}
                    </p>
                    <div className="text-blue-600 font-semibold hover:underline cursor-pointer">
                      Uredi fajl →
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white">Nema dostupnih fajlova.</p>
          )}
        </div>
      </div>
    </div>
  );
}
