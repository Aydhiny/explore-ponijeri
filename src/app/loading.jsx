import Image from "next/image";
import React from "react";
import loading from "./images/loading.svg";

export default function Loading() {
  return (
    <div className="p-24 w-full items-center justify-center py-24">
      <Image alt="loading..." src={loading} />
    </div>
  );
}
