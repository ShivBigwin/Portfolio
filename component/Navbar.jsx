"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-full w-full flex justify-center px-3 overflow-hidden">

      {/* DESKTOP NAVBAR */}
      <div
        className="
        hidden md:flex items-center gap-8 lg:gap-10 
        px-6 lg:px-10 py-3 lg:py-4
        rounded-full
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-lg
      "
      >
        <h1 className="font-semibold text-white whitespace-nowrap">
          Sachin Mittal
        </h1>

        <nav className="flex gap-6 lg:gap-8 text-sm text-white">
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#Books" className="hover:opacity-70 transition">
            Books
          </a>
          <a href="#Work" className="hover:opacity-70 transition">
            Work
          </a>
          <a href="#Contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden w-full flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-white font-semibold pl-2">
          Sachin Mittal
        </h1>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            px-5 py-2 rounded-full
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            text-white
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="
          absolute top-16 left-1/2 -translate-x-1/2
          w-[92%] max-w-sm
          rounded-2xl
          bg-white/10 backdrop-blur-xl 
          border border-white/20
          shadow-xl
          text-white p-6 space-y-5
        "
        >
          <a
            href="#about"
            className="block text-center hover:opacity-70 transition"
            onClick={() => setOpen(false)}
          >
            About
          </a>

          <a
            href="#Books"
            className="block text-center hover:opacity-70 transition"
            onClick={() => setOpen(false)}
          >
            Books
          </a>

          <a
            href="#Work"
            className="block text-center hover:opacity-70 transition"
            onClick={() => setOpen(false)}
          >
            Work
          </a>

          <a
            href="#Contact"
            className="block text-center hover:opacity-70 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}