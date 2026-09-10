"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "../ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Quest Log", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const renderNavLinks = () => (
    <ul className="hidden md:flex items-center gap-5 lg:gap-7">
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm font-medium text-navy/70 dark:text-[#8B8BA7] hover:text-arcade-purple dark:hover:text-pink-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-arcade-purple dark:after:bg-pink-400 hover:after:w-full after:transition-all"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto relative flex w-full items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "mx-4 mt-3 max-w-4xl rounded-full border border-gray-200/80 dark:border-white/15 bg-white/85 dark:bg-[#0F0F1A]/85 px-4 py-2 sm:px-6 shadow-[0_14px_32px_rgba(0,0,0,0.12)] backdrop-blur-md sm:mx-auto"
            : "w-full max-w-[120rem] rounded-none border-transparent bg-transparent px-6 py-5 sm:px-10 shadow-none"
        }`}
      >
        {/* Left Side: Logo (+ Links if NOT scrolled) */}
        {!scrolled ? (
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="#hero" className="flex items-center gap-2 group focus:outline-none" aria-label="Home">
              <div className="relative flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110">
                <Logo size={34} className="drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,107,157,0.7)] transition-all duration-300" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arcade-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-arcade-mint"></span>
                </span>
              </div>
            </a>
            {renderNavLinks()}
          </div>
        ) : (
          <>
            <a href="#hero" className="flex items-center gap-2 group focus:outline-none" aria-label="Home">
              <div className="relative flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110">
                <Logo size={30} className="drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,107,157,0.7)] transition-all duration-300" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arcade-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-arcade-mint"></span>
                </span>
              </div>
            </a>
            {renderNavLinks()}
          </>
        )}

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-gray-200 dark:border-white/15 bg-white/80 dark:bg-[#1A1A2E] text-navy dark:text-[#E8E8F0] hover:border-arcade-purple hover:text-arcade-purple dark:hover:text-pink-300 transition-colors shadow-sm"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-arcade-pink to-arcade-purple text-white text-xs sm:text-sm font-semibold shadow-arcade-pink hover:shadow-arcade-purple hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Let&apos;s Talk!</span>
            <MessageSquare size={14} />
          </a>
        </div>

        {/* Mobile Nav Trigger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-1.5 rounded-full border border-gray-200 dark:border-white/15 bg-white/80 dark:bg-[#1A1A2E] text-navy dark:text-[#E8E8F0]"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-full border border-gray-200 dark:border-white/15 bg-white/80 dark:bg-[#1A1A2E] text-navy dark:text-[#E8E8F0] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Drawer Dropdown */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-3 md:hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0F0F1A]/95 backdrop-blur-md p-5 shadow-2xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-navy dark:text-[#E8E8F0] hover:text-arcade-purple dark:hover:text-pink-400 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-arcade-pink to-arcade-purple text-white font-semibold text-sm shadow-arcade-pink mt-2"
            >
              <span>Let&apos;s Talk!</span>
              <MessageSquare size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
