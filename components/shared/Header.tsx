"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#models", label: "Модели" },
  { href: "#business", label: "Для бизнеса" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-md border-b border-[#00d4ff]/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Zap
                className="w-7 h-7 text-[#ff2d78] group-hover:text-[#00d4ff] transition-colors duration-300"
                style={{ filter: "drop-shadow(0 0 8px #ff2d78)" }}
              />
            </div>
            <span
              className="text-lg font-black tracking-wider uppercase"
              style={{
                fontFamily: "'Arial Black', sans-serif",
                background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ENCOM
            </span>
            <span className="text-sm font-medium text-[#00d4ff]/80 hidden sm:block tracking-widest uppercase">
              ARCADE
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-[#f0f0f8]/70 hover:text-[#00d4ff] transition-colors duration-200 relative group tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contacts")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold btn-neon-solid-pink rounded-sm uppercase tracking-wider"
            >
              <span>Рассчитать</span>
            </button>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#00d4ff] hover:text-[#ff2d78] transition-colors"
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050508]/95 backdrop-blur-lg border-b border-[#00d4ff]/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-[#f0f0f8]/80 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 rounded transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => handleNavClick("#contacts")}
                  className="w-full py-3 text-sm font-semibold btn-neon-solid-pink rounded-sm uppercase tracking-wider"
                >
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
