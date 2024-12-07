import Link from "next/link";
import React from "react";
import Tree from "../images/tree.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="p-4 w-full absolute top-0 shadow-2xl z-50 bg-gradient-to-l from-[#a7cdffe5] to-[#cfe2ff85] backdrop-blur-sm border-b border-y-main-color-lighter-green">
      <ul className="flex justify-center font-semibold items-center text-main-color-dark-green text-sm">
        <Image
          alt="tree"
          className="mr-10 -rotate-12"
          src={Tree}
          height={26}
          width={26}
        />
        <li className="mr-10 transition-all duration-150 hover:text-black">
          <Link href="/">Početna</Link>
        </li>
        <li className="mr-10 transition-all duration-150 hover:text-black">
          <Link href="/images">Slike</Link>
        </li>
        <li className="mr-10 transition-all duration-150 hover:text-black">
          <Link href="/misc">Restorani</Link>
        </li>
        <li className="mr-10 transition-all duration-150 hover:text-black">
          <Link href="/stay">Prebivališta</Link>
        </li>
        <li className="mr-10 transition-all duration-150 hover:text-black">
          <Link href="/activities">Aktivnosti</Link>
        </li>
        <li className="transition-all duration-150 hover:text-black">
          <Link href="/about">O nama</Link>
        </li>
        <Image
          alt="tree"
          className="ml-10 rotate-12"
          src={Tree}
          height={26}
          width={26}
        />
      </ul>
    </div>
  );
}
