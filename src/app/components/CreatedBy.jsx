import React from "react";

export default function CreatedBy() {
  return (
    <footer
      className="bg-gray-800  text-white"
      style={{
        textAlign: "center",
        padding: "5px",
        fontSize: "14px",
      }}
    >
      <div className="flex text-center justify-center">
        <p className="mr-2">Created by Aydhiny.</p>
        <p className="mr-2"> Check out my work on</p>
        <a
          className="text-blue-500"
          href="https://github.com/Aydhiny"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
