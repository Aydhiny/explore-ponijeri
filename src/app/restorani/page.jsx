import React from "react";
import Restaurant from "../components/Restaurant";
import Eko from "../components/Eko";
import Pasha from "../components/Pasha";

export default function page() {
  return (
    <div className="px-20 py-32">
      <h1 className="text-6xl mb-12 font-bold text-gray-600 font-playwrite-hr">
        Restorani
      </h1>
      <Restaurant />
      <Eko />
      <Pasha />
    </div>
  );
}
