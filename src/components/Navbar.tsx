"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[60px] flex items-center px-6
          transition-all duration-300 border-b
          ${
            scrolled
              ? "bg-[#090C10]/90 backdrop-blur-xl border-white/[0.07]"
              : "bg-[#090C10]/80 backdrop-blur-md border-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mr-10">
          <div
            className="w-7 h-7 rounded-[7px] bg-brand-blue flex items-center
                          justify-center text-xs font-bold text-white font-head"
          >
            A
          </div>
          <span className="font-head text-[15px] font-semibold text-white tracking-tight">
            Artha<span className="text-brand-glow">AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 flex-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-150
                ${
                  pathname === l.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2.5 ml-auto">
          <Link
            href="/about"
            className="px-4 py-2 text-[13px] text-white/60 border border-white/10
                       rounded-lg hover:text-white hover:border-white/20 transition-all"
          >
            Contact
          </Link>
          <Link
            href="/diagnostic"
            className="px-4 py-2 text-[13px] font-medium text-white bg-brand-blue
                       rounded-lg hover:bg-brand-glow transition-all duration-200
                       shadow-lg shadow-brand-blue/20"
          >
            Book a call
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#090C10]/97
                       backdrop-blur-xl border-b border-white/[0.07] px-6 py-3 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/70 hover:text-white text-[15px]
                           border-b border-white/[0.06] last:border-0 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/diagnostic"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center py-3 rounded-lg bg-brand-blue
                         text-white text-sm font-medium"
            >
              Book a call →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
