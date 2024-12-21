"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Kakanj from "../images/kakanj.png";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 bg-white text-center rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-10">Općina Kakanj: Admin</h1>
        <Image
          className="mx-auto animate-bounce hover:bg-white hover:shadow-lg transition-all duration-150 bg-gradient-to-t rounded-sm m-6 sm:p-4 from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b-4 border-y-main-color-lighter-green border-opacity-35"
          alt="kakanj"
          src={Kakanj}
          width={100}
          height={100}
        />
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="password"
          placeholder="Upišite lozinku..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded text-center mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:text-white hover:bg-black shdow-sm transition-all duration-150 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
      <Link
        className="px-4 absolute bottom-0 left-0 shadow-lg rounded-md transition-all duration-150 hover:text-black hover:bg-white py-2 bg-blue-500 text-white font-bold m-12"
        href="/blog"
      >
        Nazad
      </Link>
    </div>
  );
}
