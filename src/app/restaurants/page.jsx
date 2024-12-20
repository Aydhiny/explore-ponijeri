import React from "react";
import Restaurant from "../components/Restaurant";
import Eko from "../components/Eko";
import Pasha from "../components/Pasha";

export default function page() {
  return (
    <div className="xl:px-20 px-4 py-32">
      <h1 className="text-6xl mb-12 font-bold text-gray-600 font-playwrite-hr">
        Restorani
      </h1>
      <div className="shadow-2xl bg-gradient-to-b from-white to-slate-300">
        <Restaurant />
        <Eko />
        <Pasha />
      </div>
    </div>
  );
}
