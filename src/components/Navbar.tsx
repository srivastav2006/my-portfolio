"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] md:w-[92%] lg:w-[88%] z-50">
      <div className="flex items-center justify-between px-5 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Logo / Name */}
        <Link href="/" className="text-base md:text-lg font-bold tracking-wide">
          Chagapuram Srivastav
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 font-medium">
          <Link href="/projects" className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition">
            Projects
          </Link>
          <Link href="/about" className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition">
            About
          </Link>
          <a
            href="https://github.com/srivastav2006"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/srivastav3/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:srivastav3306@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition"
          >
            Email
          </a>

          <a
            href="/api/resume"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-2 rounded-xl px-4 py-1.5 transition bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpenDrawer(!openDrawer)}
          aria-label="Toggle menu"
        >
          {openDrawer ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {openDrawer && (
        <div className="mt-2 rounded-2xl backdrop-blur-xl bg-zinc-900/90 border border-white/10 shadow-2xl p-4 space-y-2 flex flex-col font-medium md:hidden">
          <Link
            href="/projects"
            onClick={() => setOpenDrawer(false)}
            className="px-3 py-2 rounded-xl hover:bg-white/10"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setOpenDrawer(false)}
            className="px-3 py-2 rounded-xl hover:bg-white/10"
          >
            About
          </Link>
          <a
            href="https://github.com/srivastav2006"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl hover:bg-white/10"
            onClick={() => setOpenDrawer(false)}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/srivastav3/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl hover:bg-white/10"
            onClick={() => setOpenDrawer(false)}
          >
            LinkedIn
          </a>
          <a
            href="mailto:srivastav3306@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl hover:bg-white/10"
            onClick={() => setOpenDrawer(false)}
          >
            Email
          </a>

          <a
            href="/api/resume"
            download
            target="_blank"
            onClick={() => setOpenDrawer(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2 transition bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
