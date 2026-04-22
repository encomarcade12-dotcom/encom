"use client";

import { motion } from "framer-motion";
import { Paintbrush, Truck, Settings, CalendarRange, Cpu, HeadphonesIcon, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Cpu,
    color: "#ff2d78",
    title: "Индивидуальное изготовление",
    short: "Под ваш бренд",
    desc: "Создадим автомат с вашим логотипом, цветами бренда и уникальным дизайном корпуса. Полная кастомизация от схемы до прошивки.",
    details: ["Уникальный дизайн корпуса", "Брендирование и логотипы", "Кастомная прошивка с вашими играми", "Уникальные LED-схемы подсветки"],
    badge: null,
  },
  {
    icon: CalendarRange,
    color: "#00d4ff",
    title: "Аренда автоматов",
    short: "Гибкие условия",
    desc: "Не хотите покупать сразу? Возьмите автомат в аренду. Минимальный срок — 1 день. Отличный вариант для мероприятий и тест-драйва.",
    details: ["От 7 000 ₽/день", "Скидка 15% от 3 дней", "Скидка 25% от 7 дней", "Доставка и установка включены"],
    badge: "от 7 000 ₽/день",
    badgeColor: "#00d4ff",
  },
  {
    icon: Paintbrush,
    color: "#bf5fff",
    title: "Брендирование",
    short: "Ваш стиль",
    desc: "Превратите автомат в часть вашего фирменного стиля. Виниловые стикеры, покраска, нанесение логотипов — любой формат.",
    details: ["Виниловая оклейка", "Кастомная покраска", "Лазерная гравировка", "LED-надписи и логотипы"],
    badge: null,
  },
  {
    icon: Truck,
    color: "#39ff14",
    title: "Доставка и установка",
    short: "По всей России",
    desc: "Доставляем автоматы по всей России. Наш специалист приедет, установит и обучит ваш персонал работе с автоматом.",
    details: ["Москва и область — бесплатно", "Россия — транспортной компанией", "Сборка и подключение на месте", "Обучение персонала"],
    badge: null,
  },
  {
    icon: Settings,
    color: "#ffe600",
    title: "Техническое обслуживание",
    short: "Поддержка 24/7",
    desc: "Гарантийный и постгарантийный сервис. Выезд мастера, удалённая диагностика, замена комплектующих в течение 48 часов.",
    details: ["Гарантия 1 год", "Выезд мастера в Москве", "Удалённая диагностика", "Запчасти всегда в наличии"],
    badge: null,
  },
  {
    icon: HeadphonesIcon,
    color: "#ff6b1a",
    title: "Полное сопровождение",
    short: "От А до Я",
    desc: "Мы не просто продаём автомат — мы помогаем получить максимум. Советы по размещению, маркетинговая поддержка, рекомендации по турнирам.",
    details: ["Консультация по размещению", "Маркетинговые материалы", "Советы по турнирам", "Персональный менеджер"],
    badge: null,
  },
];

export default function Services() {
  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 grid-bg opacity-15" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5">
            <span className="text-xs font-semibold text-[#39ff14] uppercase tracking-widest">Услуги</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #39ff14, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Всё для вашего проекта</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            От идеи до работающего автомата в вашем заведении — полный цикл услуг.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group card-neon rounded-sm p-6 flex flex-col relative overflow-hidden"
              >
                {/* Badge */}
                {service.badge && (
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-sm text-xs font-bold"
                    style={{
                      background: service.badgeColor + "20",
                      border: `1px solid ${service.badgeColor}50`,
                      color: service.badgeColor,
                    }}
                  >
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: service.color + "12",
                    border: `1px solid ${service.color}25`,
                    boxShadow: `0 0 20px ${service.color}15`,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: service.color, filter: `drop-shadow(0 0 6px ${service.color})` }}
                  />
                </div>

                <div className="text-xs text-[#f0f0f8]/30 uppercase tracking-widest mb-1">{service.short}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#f0f0f8]/55 leading-relaxed mb-4 flex-1">{service.desc}</p>

                {/* Detail list */}
                <ul className="space-y-1.5">
                  {service.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#f0f0f8]/50">
                      <span style={{ color: service.color }}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Hover glow line at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Rental highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-sm overflow-hidden border border-[#00d4ff]/20 mb-12"
          style={{ background: "rgba(0, 212, 255, 0.03)" }}
        >
          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1">
                <div className="text-[#00d4ff] text-xs uppercase tracking-widest font-semibold mb-2">Популярная услуга</div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Аренда аркадного автомата
                </h3>
                <p className="text-[#f0f0f8]/60 max-w-xl">
                  Идеально для мероприятий, тест-драйва перед покупкой, сезонных акций и праздников. Мы доставляем, устанавливаем и забираем.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <div className="text-center px-6 py-4 border border-[#00d4ff]/20 rounded-sm">
                  <div className="text-3xl font-black text-[#00d4ff]">7 000 ₽</div>
                  <div className="text-xs text-[#f0f0f8]/40">1 день</div>
                </div>
                <div className="text-center px-6 py-4 border border-[#00d4ff]/40 rounded-sm" style={{ boxShadow: "0 0 20px rgba(0,212,255,0.1)" }}>
                  <div className="text-3xl font-black text-[#00d4ff]">−15%</div>
                  <div className="text-xs text-[#f0f0f8]/40">от 3 дней</div>
                </div>
                <div className="text-center px-6 py-4 bg-[#00d4ff]/10 border border-[#00d4ff]/50 rounded-sm">
                  <div className="text-3xl font-black text-[#00d4ff]">−25%</div>
                  <div className="text-xs text-[#f0f0f8]/40">от 7 дней</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContacts}
            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider btn-neon-blue rounded-sm text-sm"
          >
            Обсудить услуги
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
