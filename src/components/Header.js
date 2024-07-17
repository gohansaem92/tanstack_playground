import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex item-center">
          <img src="/" alt="logo" className="h-8 mr-2" />
          <span className="text-xl font-semibold">My Website</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
