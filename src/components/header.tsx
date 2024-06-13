// components/Header.js
import React from "react";
import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const MainHeader = () => {
  return (
    <header className="text-white py-4 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <Link href='/' className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Nicklaus Vega
        </Link>
        <nav className="w-40 md:w-auto">
          <ul className="flex justify-center md:justify-start space-x-6">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className=" leading-7 transition ease-in-out transform relative text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                {item.name}
              </Link>
            ))}
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
