import Link from "next/link";
import React from "react";
import Tree from "../images/tree.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="p-4 bg-gradient-to-r from-main-color-light-green to-main-color-lighter-green border-b border-main-color-dark-green border-opacity-10 bg-opacity-50">
      <ul className="flex justify-between items-center text-main-color-dark-green">
        <Image alt="tree" src={Tree} height={26} width={26} />
        <li className="mr-10">
          <Link href="/">Početna</Link>
        </li>
        <li className="mr-10">
          <Link href="/images">Slike</Link>
        </li>
        <li className="mr-10">
          <Link href="/misc">Restorani</Link>
        </li>
        <li className="mr-10">
          <Link href="/stay">Prebivališta</Link>
        </li>
        <li className="mr-10">
          <Link href="/activities">Aktivnosti</Link>
        </li>
        <li>
          <Link href="/about">O nama</Link>
        </li>
        <Image alt="tree" src={Tree} height={26} width={26} />
      </ul>
    </div>
  );
}
