"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Сколько стоит аркадный автомат?",
    a: "Стоимость зависит от модели: eNCOM COMPACT — от 49 900 ₽, eNCOM LITE — от 89 900 ₽, eNCOM MAX — от 117 900 ₽. Стоимость кастомных автоматов рассчитывается индивидуально в зависимости от ТЗ. Свяжитесь с нами для точного расчёта.",
    color: "#ff2d78",
  },
  {
    q: "Сколько времени занимает производство?",
    a: "Стандартное производство занимает 10 рабочих дней с момента подписания договора и получения предоплаты. Для кастомных проектов с уникальным дизайном — до 15 рабочих дней. Аренда — от 1 дня, автомат доставляем в день заявки при наличии свободных машин.",
    color: "#00d4ff",
  },
  {
    q: "Какая гарантия на автоматы?",
    a: "Гарантия 1 год на все компоненты: электронику, дисплей, джойстики, кнопки и корпус. После гарантийного срока — платное обслуживание. В Москве выезжаем сами, по России — помогаем удалённо и отправляем запчасти.",
    color: "#39ff14",
  },
  {
    q: "Можно ли сделать автомат с нашим брендингом?",
    a: "Да, это наша специализация! Мы делаем полностью кастомные автоматы: уникальный дизайн корпуса, ваш логотип, фирменные цвета, кастомная LED-подсветка, специальный экран приветствия. Даже набор игр можем настроить под ваш бренд.",
    color: "#bf5fff",
  },
  {
    q: "Как работает аренда аркадного автомата?",
    a: "Аренда от 7 000 ₽/день включает доставку и установку в Москве. Мы доставляем автомат в ваше заведение, устанавливаем и подключаем. По окончании срока — забираем. Скидка 15% от 3 дней, 25% от 7 дней. По России аренда возможна при выезде нашего специалиста.",
    color: "#ffe600",
  },
  {
    q: "Сколько игр в автомате и какие?",
    a: "В зависимости от модели: COMPACT — 150+ игр, LITE — 170+ игр, MAX — 200+ игр. Это классические аркады: Street Fighter, Mortal Kombat, Pac-Man, Contra, Tetris, Super Mario, Sonic и сотни других хитов. Весь интерфейс на русском языке. По запросу добавляем специфические игры.",
    color: "#ff6b1a",
  },
  {
    q: "Есть ли монетоприёмник?",
    a: "Монетоприёмник — опциональная функция. Можно добавить к любой модели за дополнительную плату. Поддерживаем монеты 5, 10 рублей и жетоны. Также доступна интеграция с картридером для бесконтактной оплаты.",
    color: "#ff2d78",
  },
  {
    q: "Доставляете ли по всей России?",
    a: "Да! В Москве и Московской области доставка бесплатна. По России отправляем транспортными компаниями (СДЭК, Деловые Линии) в надёжной упаковке. Для дальних регионов также организуем выезд нашего специалиста для сложных установок.",
    color: "#00d4ff",
  },
  {
    q: "Как быстро окупается аркадный автомат?",
    a: "При размещении в проходном месте с монетоприёмником (5 ₽/игра) и 50 играх в день выручка составит около 9 000 ₽/месяц. Реальные данные наших клиентов показывают окупаемость за 6–18 месяцев в зависимости от трафика заведения. Даже без монетоприёмника автомат увеличивает средний чек на 20–40%.",
    color: "#39ff14",
  },
  {
    q: "Можно ли провести турнир с вашей помощью?",
    a: "Да! Мы помогаем организовать турниры: предоставляем методические материалы, советуем по формату и рекламе. Некоторые наши клиенты проводят еженедельные турниры с призовым фондом — это отличный повод для возврата клиентов и дополнительный доход.",
    color: "#bf5fff",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof FAQ_ITEMS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-white/8 rounded-sm overflow-hidden transition-colors duration-300"
      style={{ borderColor: isOpen ? item.color + "40" : undefined }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left group"
        style={{ background: isOpen ? item.color + "06" : "rgba(10,10,20,0.6)" }}
      >
        <span
          className="font-semibold text-sm sm:text-base text-[#f0f0f8]/85 group-hover:text-white transition-colors pr-4"
          style={{ color: isOpen ? "white" : undefined }}
        >
          {item.q}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300"
          style={
            isOpen
              ? { background: item.color + "20", border: `1px solid ${item.color}50` }
              : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }
          }
        >
          {isOpen
            ? <Minus className="w-4 h-4" style={{ color: item.color }} />
            : <Plus className="w-4 h-4 text-[#f0f0f8]/50" />
          }
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className="px-5 pb-5"
              style={{ background: item.color + "04", borderTop: `1px solid ${item.color}15` }}
            >
              <p className="text-sm text-[#f0f0f8]/60 leading-relaxed pt-4">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff2d78]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#ff2d78]/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#ff2d78]/30 bg-[#ff2d78]/5">
            <span className="text-xs font-semibold text-[#ff2d78] uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span className="text-white">Частые </span>
            <span style={{
              background: "linear-gradient(135deg, #ff2d78, #bf5fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>вопросы</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60">
            Не нашли ответ? Напишите нам в Telegram — ответим за 15 минут.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#f0f0f8]/40 mb-4 text-sm">Остались вопросы?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://t.me/encomarcade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm btn-neon-blue rounded-sm uppercase tracking-wider"
            >
              Написать в Telegram
            </a>
            <a
              href="tel:+79299927271"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm border border-white/10 text-[#f0f0f8]/60 hover:text-white hover:border-white/30 rounded-sm transition-all"
            >
              Позвонить нам
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
