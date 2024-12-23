import Image from "next/image";
import React from "react";
import loading from "./images/loading.svg";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-[90]">
      <div className="animate-pulse">
        <Image alt="loading..." src={loading} width={100} height={100} />
      </div>
    </div>
  );
}
