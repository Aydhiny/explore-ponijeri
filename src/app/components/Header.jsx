import React from "react";
import Ponijeri from "../images/ponijeri.png";

export default function Header() {
  return (
    <div
      className="relative bg-cover bg-center p-24"
      style={{
        backgroundImage: `url(${Ponijeri})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-main-color-dark-green">
        <div className="text-center">
          <h1 className="text-9xl font-bold">
            Explore <span>Ponijeri</span>
          </h1>
          <p className="mt-2 text-lg">Your awesome journey begins here!</p>
        </div>
      </div>
    </div>
  );
}
