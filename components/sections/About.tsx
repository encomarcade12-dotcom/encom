"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Gamepad2, Award, Zap, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    color: "#ff2d78",
    title: "Гарантия 1 год",
    desc: "Полная гарантия на все компоненты и корпус. Сервисная поддержка на весь срок службы.",
  },
  {
    icon: Clock,
    color: "#00d4ff",
    title: "Производство за 10 дней",
    desc: "От заказа до готового автомата — 10 рабочих дней. Доставка по всей России.",
  },
  {
    icon: Gamepad2,
    color: "#39ff14",
    title: "150+ игр на русском",
    desc: "Классические аркады, платформеры, файтинги. Весь интерфейс на русском языке.",
  },
  {
    icon: Award,
    color: "#bf5fff",
    title: "Уникальный дизайн",
    desc: "Каждый автомат — произведение дизайна. Светодиодная подсветка, кастомный корпус.",
  },
  {
    icon: Zap,
    color: "#ffe600",
    title: "Быстрая окупаемость",
    desc: "Средняя окупаемость вложений — 6–12 месяцев при правильном размещении.",
  },
  {
    icon: TrendingUp,
    color: "#ff6b1a",
    title: "Рост лояльности",
    desc: "Клиенты задерживаются дольше, возвращаются чаще. Средний чек растёт на 20–40%.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#ff2d78]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#ff2d78]/30 bg-[#ff2d78]/5">
            <span className="text-xs font-semibold text-[#ff2d78] uppercase tracking-widest">О компании</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-white">Encom </span>
            <span style={{
              background: "linear-gradient(135deg, #ff2d78, #bf5fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Arcade</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            Не просто развлечение — <span className="text-[#00d4ff] font-semibold">инструмент привлечения клиентов</span> для вашего бизнеса
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="border-l-2 border-[#ff2d78] pl-5">
                <p className="text-xl font-bold text-white mb-2">С 2019 года на рынке</p>
                <p className="text-[#f0f0f8]/60">
                  Мы начали с одного автомата для местного бара и выросли до ведущего производителя аркадных автоматов с уникальным дизайном в России.
                </p>
              </div>

              <div className="border-l-2 border-[#00d4ff] pl-5">
                <p className="text-xl font-bold text-white mb-2">Более 250 уникальных автоматов</p>
                <p className="text-[#f0f0f8]/60">
                  Каждый автомат — отдельный проект с уникальным дизайном. Мы работаем с барами, ресторанами, антикафе, торговыми центрами и корпоративными заказчиками.
                </p>
              </div>

              <div className="border-l-2 border-[#bf5fff] pl-5">
                <p className="text-xl font-bold text-white mb-2">Инструмент для бизнеса</p>
                <p className="text-[#f0f0f8]/60">
                  Аркадный автомат в вашем заведении — это не просто развлечение. Это способ увеличить время пребывания гостей, создать поводы для возврата и дополнительный источник дохода через турниры.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]"
              style={{ boxShadow: "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(255,45,120,0.1)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=800&q=80"
                alt="Производство аркадных автоматов Encom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent" />
              {/* Neon frame */}
              <div className="absolute inset-0 border border-[#00d4ff]/30 rounded-sm" />
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="px-3 py-1 bg-[#050508]/80 backdrop-blur-sm border border-[#ff2d78]/40 rounded-sm">
                  <span className="text-xs text-[#ff2d78] font-mono font-bold">● LIVE</span>
                </div>
                <div className="px-3 py-1 bg-[#050508]/80 backdrop-blur-sm border border-[#00d4ff]/40 rounded-sm">
                  <span className="text-xs text-[#00d4ff] font-mono">ENCOM ARCADE</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 px-5 py-3 bg-[#050508] border-2 border-[#39ff14] rounded-sm"
              style={{ boxShadow: "0 0 20px rgba(57,255,20,0.4)" }}
            >
              <div className="text-center">
                <div className="text-2xl font-black text-[#39ff14]">10</div>
                <div className="text-xs text-[#f0f0f8]/60 uppercase tracking-wider">дней</div>
                <div className="text-xs text-[#39ff14]/80">производство</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 px-5 py-3 bg-[#050508] border-2 border-[#ff2d78] rounded-sm"
              style={{ boxShadow: "0 0 20px rgba(255,45,120,0.4)" }}
            >
              <div className="text-center">
                <div className="text-2xl font-black text-[#ff2d78]">1 год</div>
                <div className="text-xs text-[#f0f0f8]/60 uppercase tracking-wider">гарантия</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card-neon rounded-sm p-6 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: feature.color, filter: `drop-shadow(0 0 6px ${feature.color})` }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#f0f0f8]/55 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
