import React from "react";
import BlogCard from "../components/BlogCard";
export default function Page() {
  return (
    <div className="px-24 py-12">
      <h1 className="text-6xl mb-12 font-playwrite-hr font-bold text-gray-700">
        Dobrodošli na Blog Ponijeri!
      </h1>
      <div className="grid grid-cols-3 grid-rows-3">
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
        <BlogCard
          title={"Promjena cijena"}
          description={
            "Cijene na Ponijerima su postale veće nego prošle godine."
          }
        />
      </div>
    </div>
  );
}
