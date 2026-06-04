import React from "react";

export default function CreatedBy() {
  return (
    <div
      className="text-center py-2 text-xs"
      style={{
        background: "#060d1a",
        color: "rgba(255,255,255,0.25)",
      }}
    >
      Built by{" "}
      <a
        href="https://github.com/Aydhiny"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white/50 transition-colors"
      >
        Aydhiny
      </a>
    </div>
  );
}
