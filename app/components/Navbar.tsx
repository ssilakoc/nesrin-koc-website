"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımda", href: "#about" },
  { label: "Deneyim", href: "#experience" },
  { label: "Hizmetler", href: "#services" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-playfair text-xl font-semibold text-text-main hover:text-sage-500 transition-colors"
        >
          Nesrin Koç
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-inter text-sm text-text-muted hover:text-sage-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:inline-flex items-center px-5 py-2 bg-sage-400 text-white text-sm font-medium rounded-full hover:bg-sage-500 transition-colors duration-200"
        >
          Randevu Al
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-main p-1"
          aria-label="Menü"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-cream-100/98 backdrop-blur-md border-t border-sage-100"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-6 py-3 font-inter text-sm text-text-muted hover:text-sage-500 hover:bg-sage-50 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-6 pt-2 pb-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-2.5 bg-sage-400 text-white text-sm font-medium rounded-full hover:bg-sage-500 transition-colors"
                >
                  Randevu Al
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
