"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Play, Calculator, Calendar, Gamepad2 } from "lucide-react";

const STATS = [
  { value: "250+", label: "автоматов произведено" },
  { value: "7", label: "лет на рынке" },
  { value: "150+", label: "игр на русском" },
  { value: "10", label: "дней производство" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920&q=80"
          alt="Аркадные автоматы с неоновой подсветкой"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-[#050508]/40 to-[#050508]" />
        {/* Neon color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d78]/5 via-transparent to-[#00d4ff]/5" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30" />

      {/* Animated particles / neon orbs */}
      {mounted && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                background: i % 3 === 0
                  ? "radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)"
                  : i % 3 === 1
                  ? "radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(191,95,255,0.08) 0%, transparent 70%)",
                left: `${[10, 60, 30, 75, 15, 85][i]}%`,
                top: `${[20, 10, 60, 40, 80, 30][i]}%`,
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#ff2d78]/40 bg-[#ff2d78]/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2d78] animate-pulse" style={{ boxShadow: "0 0 8px #ff2d78" }} />
            <span className="text-xs font-semibold text-[#ff2d78] uppercase tracking-widest">
              С 2019 года — более 250 автоматов
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 uppercase tracking-tight max-w-5xl"
          >
            <span className="block text-white">Аркадные автоматы</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #ff2d78 0%, #bf5fff 50%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(255,45,120,0.4))",
              }}
            >
              для вашего бизнеса
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-[#f0f0f8]/70 max-w-3xl mb-10 leading-relaxed"
          >
            Привлекайте и удерживайте клиентов.{" "}
            <span className="text-[#00d4ff]">Увеличивайте средний чек.</span>{" "}
            Создавайте wow-эффект.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-2xl justify-center"
          >
            <button
              onClick={() => scrollTo("#contacts")}
              className="group flex items-center justify-center gap-2 px-6 py-4 font-bold text-base uppercase tracking-wider btn-neon-solid-pink rounded-sm flex-1 sm:flex-none"
            >
              <Calculator className="w-5 h-5" />
              <span>Рассчитать стоимость</span>
            </button>

            <button
              onClick={() => scrollTo("#contacts")}
              className="group flex items-center justify-center gap-2 px-6 py-4 font-bold text-base uppercase tracking-wider btn-neon-blue rounded-sm flex-1 sm:flex-none"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Бесплатная презентация в Москве</span>
              <span className="sm:hidden">Презентация</span>
            </button>

            <button
              onClick={() => scrollTo("#models")}
              className="group flex items-center justify-center gap-2 px-6 py-4 font-bold text-base uppercase tracking-wider border border-[#f0f0f8]/20 text-[#f0f0f8]/70 hover:border-[#f0f0f8]/50 hover:text-white rounded-sm transition-all flex-1 sm:flex-none"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Смотреть модели</span>
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#00d4ff]/10 rounded-sm overflow-hidden border border-[#00d4ff]/10">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#050508]/80 backdrop-blur-sm px-6 py-5 flex flex-col items-center"
                >
                  <span
                    className="text-3xl font-black"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #ff2d78, #bf5fff)"
                        : "linear-gradient(135deg, #00d4ff, #39ff14)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#f0f0f8]/50 mt-1 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Листать</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
