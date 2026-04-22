"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Бар «Цой Жив», Москва",
    model: "eNCOM MAX",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    tags: ["Бар", "eNCOM MAX", "Кастом"],
    color: "#ff2d78",
    desc: "Кастомный дизайн в стиле 80-х с портретом Виктора Цоя. Неоновая подсветка в фирменных цветах заведения.",
  },
  {
    id: 2,
    title: "Антикафе «TimeOut», Казань",
    model: "eNCOM LITE ×2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    tags: ["Антикафе", "eNCOM LITE", "Парные"],
    color: "#00d4ff",
    desc: "Два автомата в едином стиле с брендингом антикафе. Встроенные монетоприёмники для монетизации.",
  },
  {
    id: 3,
    title: "ТЦ «Галерея», СПб",
    model: "eNCOM MAX",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80",
    tags: ["ТЦ", "eNCOM MAX", "Зона развлечений"],
    color: "#bf5fff",
    desc: "Зона развлечений с тремя автоматами. Яркие цвета торгового центра, монетоприёмники.",
  },
  {
    id: 4,
    title: "Барбершоп «Kingdom»",
    model: "eNCOM COMPACT",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    tags: ["Барбершоп", "eNCOM COMPACT"],
    color: "#39ff14",
    desc: "Компактный автомат в зоне ожидания. Дизайн в брутальном мужском стиле, тёмные тона, золотые акценты.",
  },
  {
    id: 5,
    title: "Офис Mail.ru, Москва",
    model: "eNCOM LITE",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    tags: ["Офис", "eNCOM LITE", "Корпоратив"],
    color: "#ffe600",
    desc: "Корпоративный автомат с брендингом компании. Зона отдыха для сотрудников, 200+ игр.",
  },
  {
    id: 6,
    title: "Кальянная «Smoke Lab»",
    model: "eNCOM MAX",
    image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=600&q=80",
    tags: ["Кальянная", "eNCOM MAX", "Кастом"],
    color: "#ff6b1a",
    desc: "Неоновый автомат в дымчатых тонах. Встроенная WiFi-колонка, специальный плейлист для атмосферы.",
  },
  {
    id: 7,
    title: "Хостел «Urban», Новосибирск",
    model: "eNCOM COMPACT ×2",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    tags: ["Хостел", "eNCOM COMPACT"],
    color: "#00d4ff",
    desc: "Два компактных автомата в лаундж-зоне. Бюджетное решение с максимальной отдачей по площади.",
  },
  {
    id: 8,
    title: "Магазин комиксов «Bubble»",
    model: "eNCOM LITE",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80",
    tags: ["Ритейл", "eNCOM LITE", "Кастом"],
    color: "#bf5fff",
    desc: "Автомат в стиле ретро-комикса. Кастомные персонажи на корпусе, тематические игры.",
  },
];

const FILTERS = ["Все", "Бар", "Антикафе", "eNCOM MAX", "eNCOM LITE", "eNCOM COMPACT", "Кастом"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  const filtered = activeFilter === "Все"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#bf5fff]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#bf5fff]/30 bg-[#bf5fff]/5">
            <span className="text-xs font-semibold text-[#bf5fff] uppercase tracking-widest">Портфолио</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #bf5fff, #ff2d78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Наши работы</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            Более 250 реализованных проектов по всей России. Каждый автомат — уникальный.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200"
              style={
                activeFilter === filter
                  ? { background: "#ff2d78", color: "#000", boxShadow: "0 0 15px rgba(255,45,120,0.5)" }
                  : { background: "rgba(255,255,255,0.05)", color: "rgba(240,240,248,0.6)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-sm overflow-hidden cursor-pointer aspect-square"
                onClick={() => setSelectedItem(item)}
                style={{ border: `1px solid ${item.color}20` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  style={{ background: `linear-gradient(to top, ${item.color}CC, transparent)` }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-black mb-1">{item.model}</p>
                  <p className="text-sm font-bold text-black leading-tight">{item.title}</p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-black/30 text-white rounded-sm backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-black/50 rounded-sm flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-sm overflow-hidden"
              style={{ border: `2px solid ${selectedItem.color}60`, boxShadow: `0 0 60px ${selectedItem.color}40` }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6 bg-[#0a0a14]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                  <button onClick={() => setSelectedItem(null)} className="text-[#f0f0f8]/40 hover:text-white transition-colors ml-4">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm font-bold mb-3" style={{ color: selectedItem.color }}>
                  {selectedItem.model}
                </div>
                <p className="text-[#f0f0f8]/60 text-sm mb-4">{selectedItem.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-sm"
                      style={{ background: selectedItem.color + "20", color: selectedItem.color, border: `1px solid ${selectedItem.color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
