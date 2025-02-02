"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuVisible]);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <nav className="relative mx-auto flex items-center justify-between px-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-bold text-white transition-colors"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-2xl text-transparent">
                LogoIpsum
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white md:hidden"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              {menuVisible ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="/signin"
                className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Sign in
              </Link>
              <Link
                href="/setup"
                className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-yellow-300"
              >
                Get Your Consultancy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
