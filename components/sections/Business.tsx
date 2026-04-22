"use client";

import { motion } from "framer-motion";
import {
  Coffee, Scissors, Building2, ShoppingBag, Tv, Wine,
  TrendingUp, Heart, Trophy, Palette, DollarSign, Star
} from "lucide-react";

const VENUES = [
  { icon: Wine, name: "Бары и кальянные", desc: "Гости задерживаются на 30–60 минут дольше", color: "#ff2d78" },
  { icon: Coffee, name: "Антикафе", desc: "Основной элемент атмосферы и развлечений", color: "#00d4ff" },
  { icon: Scissors, name: "Барбершопы", desc: "Клиенты ждут очереди с удовольствием", color: "#39ff14" },
  { icon: Building2, name: "Торговые центры", desc: "Привлечение трафика в якорную зону", color: "#bf5fff" },
  { icon: Tv, name: "Отели и хостелы", desc: "Добавляет ценности и незабываемости", color: "#ffe600" },
  { icon: Building2, name: "Корпоративные офисы", desc: "Перезагрузка для сотрудников, wow для гостей", color: "#ff6b1a" },
  { icon: ShoppingBag, name: "Магазины комиксов", desc: "Идеальный стиль и атмосфера", color: "#00d4ff" },
  { icon: Building2, name: "Event-пространства", desc: "Дополнительная зона активности", color: "#ff2d78" },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    color: "#ff2d78",
    stat: "+20–40%",
    title: "Рост среднего чека",
    desc: "Люди задерживаются дольше — и больше заказывают. Средний чек в заведениях с аркадой растёт на 20–40%.",
  },
  {
    icon: Heart,
    color: "#00d4ff",
    stat: "×3",
    title: "Лояльность клиентов",
    desc: "Уникальный опыт → эмоциональная привязанность → регулярные возвраты. Клиенты рассказывают друзьям.",
  },
  {
    icon: Trophy,
    color: "#39ff14",
    stat: "♾",
    title: "Турниры и события",
    desc: "Организуйте турниры — создайте поводы для возврата. Платные соревнования как источник дохода.",
  },
  {
    icon: Palette,
    color: "#bf5fff",
    stat: "WOW",
    title: "Уникальный интерьер",
    desc: "Аркадный автомат — это арт-объект. Люди фотографируются и публикуют в соцсетях — бесплатный маркетинг.",
  },
  {
    icon: DollarSign,
    color: "#ffe600",
    stat: "6–12 мес",
    title: "Быстрая окупаемость",
    desc: "При монетоприёмнике автомат окупается за 6–12 месяцев. При аренде — ещё быстрее.",
  },
  {
    icon: Star,
    color: "#ff6b1a",
    stat: "5★",
    title: "Отзывы и контент",
    desc: "Заведения с аркадой получают больше фото-отзывов в соцсетях и на картах. УТП для рекламы.",
  },
];

const CASES = [
  {
    title: "Бар «Цой Жив», Москва",
    result: "Средний чек вырос на 35% за 3 месяца",
    detail: "Установили eNCOM MAX в зоне ожидания. Гости начали специально приходить раньше бронирования.",
    color: "#ff2d78",
  },
  {
    title: "Антикафе «TimeOut», Казань",
    result: "Выручка +28% в первый месяц",
    detail: "Два автомата eNCOM LITE стали центральной зоной. Ввели платные вечерние турниры — +12 000 ₽/мес.",
    color: "#00d4ff",
  },
  {
    title: "Барбершоп «Kingdom», Екатеринбург",
    result: "0 жалоб на ожидание",
    detail: "Клиенты, ждущие мастера, теперь не уходят. Средняя допродажа ухода за бородой выросла.",
    color: "#39ff14",
  },
];

export default function Business() {
  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="business" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#bf5fff]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#ff2d78]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#bf5fff]/30 bg-[#bf5fff]/5">
            <span className="text-xs font-semibold text-[#bf5fff] uppercase tracking-widest">Для бизнеса</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #bf5fff, #ff2d78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Где работает аркада</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            Аркадный автомат — универсальный инструмент для любого заведения, где есть люди и время ожидания.
          </p>
        </motion.div>

        {/* Venues */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {VENUES.map((venue, i) => {
            const Icon = venue.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group card-neon rounded-sm p-4 text-center cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: venue.color + "15", border: `1px solid ${venue.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: venue.color }} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                  {venue.name}
                </h4>
                <p className="text-xs text-[#f0f0f8]/40 leading-tight">{venue.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
            Измеримые результаты для вашего бизнеса
          </h3>
          <p className="text-[#f0f0f8]/50">На основе реальных данных от наших клиентов</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group card-neon rounded-sm p-6"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: benefit.color + "15", border: `1px solid ${benefit.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </div>
                  <div>
                    <div
                      className="text-3xl font-black leading-none mb-1"
                      style={{ color: benefit.color }}
                    >
                      {benefit.stat}
                    </div>
                    <h4 className="text-sm font-bold text-white">{benefit.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-[#f0f0f8]/55 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Case studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
            Кейсы наших клиентов
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-neon rounded-sm p-6"
              style={{ borderLeft: `3px solid ${c.color}` }}
            >
              <h4 className="font-bold text-white mb-2">{c.title}</h4>
              <div
                className="text-lg font-black mb-3"
                style={{ color: c.color }}
              >
                {c.result}
              </div>
              <p className="text-sm text-[#f0f0f8]/50 leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToContacts}
            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider btn-neon-solid-pink rounded-sm text-sm"
          >
            Рассчитать для моего заведения
          </button>
          <p className="text-xs text-[#f0f0f8]/30 mt-3">Бесплатная консультация и расчёт ROI</p>
        </motion.div>
      </div>
    </section>
  );
}
