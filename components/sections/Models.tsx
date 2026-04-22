"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Monitor, Gamepad2, Users, Cpu, Star, ArrowRight, Calculator } from "lucide-react";

const MODELS = [
  {
    id: "max",
    name: "eNCOM MAX",
    tagline: "Флагман. Максимум впечатлений",
    price: "117 900",
    badge: "Хит",
    badgeColor: "#ff2d78",
    accentColor: "#ff2d78",
    glowColor: "rgba(255,45,120,0.3)",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&q=80",
    specs: [
      { icon: Monitor, label: "Экран", value: "29 дюймов" },
      { icon: Gamepad2, label: "Консолей", value: "8 штук" },
      { icon: Cpu, label: "Игр", value: "200+" },
      { icon: Users, label: "Игроков", value: "1–2" },
    ],
    features: [
      "Полноразмерный корпус — привлекает внимание со всего зала",
      "29\" IPS дисплей с яркими цветами",
      "8 игровых консолей: NES, SNES, SEGA, PS1, MAME, Atari и другие",
      "Джойстик + 6 кнопок для каждого игрока",
      "RGB LED-подсветка с 16 млн цветов",
      "Встроенная акустика 2×20 Вт",
      "Монетоприёмник (опция)",
      "Wi-Fi для обновления игр",
    ],
    dimensions: "Ш 70 × Г 80 × В 178 см",
    weight: "68 кг",
    bestFor: "Бары, рестораны, торговые центры",
  },
  {
    id: "lite",
    name: "eNCOM LITE",
    tagline: "Баланс цены и возможностей",
    price: "89 900",
    badge: "Популярный",
    badgeColor: "#00d4ff",
    accentColor: "#00d4ff",
    glowColor: "rgba(0,212,255,0.3)",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    specs: [
      { icon: Monitor, label: "Экран", value: "24 дюйма" },
      { icon: Gamepad2, label: "Консолей", value: "8 штук" },
      { icon: Cpu, label: "Игр", value: "170+" },
      { icon: Users, label: "Игроков", value: "1–2" },
    ],
    features: [
      "Средний размер — идеально для ограниченного пространства",
      "24\" Full HD дисплей",
      "8 игровых консолей — весь классический ассортимент",
      "Два джойстика — для совместной игры",
      "LED-подсветка по периметру корпуса",
      "Встроенная акустика 2×15 Вт",
      "Кастомная покраска под интерьер",
      "Простая установка без инструментов",
    ],
    dimensions: "Ш 65 × Г 75 × В 160 см",
    weight: "52 кг",
    bestFor: "Кальянные, барбершопы, антикафе",
  },
  {
    id: "compact",
    name: "eNCOM COMPACT",
    tagline: "Максимум в минимуме",
    price: "49 900",
    badge: "Доступный",
    badgeColor: "#39ff14",
    accentColor: "#39ff14",
    glowColor: "rgba(57,255,20,0.3)",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    specs: [
      { icon: Monitor, label: "Экран", value: "21 дюйм" },
      { icon: Gamepad2, label: "Консолей", value: "7 штук" },
      { icon: Cpu, label: "Игр", value: "150+" },
      { icon: Users, label: "Монтаж", value: "Стол/стена" },
    ],
    features: [
      "Настольный или настенный монтаж",
      "21\" дисплей — компактный и яркий",
      "7 консолей с лучшими классическими играми",
      "Два игровых джойстика",
      "Подходит для любого интерьера",
      "Встроенный аудиовыход",
      "Минимальные требования к месту",
      "Самый быстрый монтаж — 30 минут",
    ],
    dimensions: "Ш 55 × Г 45 × В 45 см",
    weight: "14 кг",
    bestFor: "Офисы, магазины комиксов, отели",
  },
];

export default function Models() {
  const [activeModel, setActiveModel] = useState<string | null>(null);

  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="models" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
            <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-widest">Модельный ряд</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #00d4ff, #bf5fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Наши автоматы</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            Три линейки для любого формата заведения и бюджета. Каждая — с уникальным дизайном и полной библиотекой игр.
          </p>
        </motion.div>

        {/* Models grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MODELS.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative flex flex-col"
              onMouseEnter={() => setActiveModel(model.id)}
              onMouseLeave={() => setActiveModel(null)}
            >
              {/* Card */}
              <div
                className="flex flex-col flex-1 rounded-sm overflow-hidden border transition-all duration-500"
                style={{
                  background: "rgba(8,8,16,0.9)",
                  borderColor: activeModel === model.id ? model.accentColor + "80" : "rgba(255,255,255,0.08)",
                  boxShadow: activeModel === model.id
                    ? `0 0 40px ${model.glowColor}, 0 0 80px ${model.glowColor.replace("0.3", "0.15")}`
                    : "none",
                }}
              >
                {/* Image area */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 30%, rgba(8,8,16,0.9) 100%)`,
                    }}
                  />

                  {/* Badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                    style={{
                      background: model.badgeColor + "20",
                      border: `1px solid ${model.badgeColor}60`,
                      color: model.badgeColor,
                      boxShadow: `0 0 10px ${model.badgeColor}40`,
                    }}
                  >
                    <Star className="w-3 h-3" />
                    {model.badge}
                  </div>

                  {/* Model name overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs text-[#f0f0f8]/50 font-mono mb-0.5">{model.tagline}</p>
                    <h3
                      className="text-2xl font-black uppercase tracking-wider"
                      style={{ color: model.accentColor, textShadow: `0 0 20px ${model.accentColor}` }}
                    >
                      {model.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-5">
                    <span
                      className="text-4xl font-black"
                      style={{ color: model.accentColor }}
                    >
                      {model.price} ₽
                    </span>
                  </div>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {model.specs.map((spec, j) => {
                      const Icon = spec.icon;
                      return (
                        <div
                          key={j}
                          className="flex items-start gap-2 p-2.5 rounded-sm"
                          style={{ background: model.accentColor + "08", border: `1px solid ${model.accentColor}15` }}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: model.accentColor }} />
                          <div>
                            <div className="text-xs text-[#f0f0f8]/40 font-medium">{spec.label}</div>
                            <div className="text-sm font-bold text-white">{spec.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 mb-6 flex-1">
                    {model.features.slice(0, activeModel === model.id ? 8 : 4).map((f, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-[#f0f0f8]/60"
                      >
                        <span style={{ color: model.accentColor }} className="flex-shrink-0 mt-1">▸</span>
                        {f}
                      </motion.div>
                    ))}
                    {activeModel !== model.id && model.features.length > 4 && (
                      <p className="text-xs text-[#f0f0f8]/30 pl-4">+ ещё {model.features.length - 4} характеристики</p>
                    )}
                  </div>

                  {/* Dimensions */}
                  <div className="flex items-center justify-between text-xs text-[#f0f0f8]/30 mb-5 pt-4 border-t border-white/5">
                    <span>📐 {model.dimensions}</span>
                    <span>⚖️ {model.weight}</span>
                  </div>

                  {/* Best for */}
                  <div
                    className="mb-5 px-3 py-2 rounded-sm text-xs"
                    style={{ background: model.accentColor + "08", borderLeft: `2px solid ${model.accentColor}` }}
                  >
                    <span className="text-[#f0f0f8]/40">Подходит для: </span>
                    <span style={{ color: model.accentColor }}>{model.bestFor}</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={scrollToContacts}
                      className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300"
                      style={{
                        background: model.accentColor,
                        color: "#000",
                        boxShadow: `0 0 20px ${model.glowColor}`,
                      }}
                    >
                      Заказать
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={scrollToContacts}
                      className="flex items-center justify-center gap-1 px-3 py-3 text-xs font-semibold rounded-sm transition-all duration-300 border"
                      style={{
                        borderColor: model.accentColor + "40",
                        color: model.accentColor,
                      }}
                    >
                      <Calculator className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#f0f0f8]/50 mb-4">
            Нужен автомат с уникальным дизайном под ваш бренд?
          </p>
          <button
            onClick={scrollToContacts}
            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider btn-neon-pink rounded-sm text-sm"
          >
            Рассчитать под ваш бизнес
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
