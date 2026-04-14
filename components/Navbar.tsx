"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-20 w-full max-w-4xl items-center justify-between px-8">
        <a href="#top" className="text-sm font-bold tracking-wide text-black">
          AZEEM KARIM
        </a>

        <ul className="hidden list-none md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="list-none border-t border-gray-200 bg-white px-8 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.label} className="py-2">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
