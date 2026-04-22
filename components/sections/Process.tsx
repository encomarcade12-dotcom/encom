"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Palette, Cpu, Package, Truck, HeadphonesIcon } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    color: "#ff2d78",
    title: "Заявка и консультация",
    desc: "Вы оставляете заявку или звоните нам. Менеджер выясняет ваши задачи: формат заведения, бюджет, пожелания по дизайну и играм.",
    duration: "1 день",
  },
  {
    num: "02",
    icon: FileText,
    color: "#ff8c42",
    title: "Техническое задание",
    desc: "Составляем подробное ТЗ: модель, комплектация, дополнительные опции (монетоприёмник, LED, брендинг). Согласовываем бюджет.",
    duration: "1 день",
  },
  {
    num: "03",
    icon: Palette,
    color: "#ffe600",
    title: "Дизайн и согласование",
    desc: "Наш дизайнер создаёт визуализацию вашего автомата. Вы видите итоговый вид до производства и вносите правки.",
    duration: "2–3 дня",
  },
  {
    num: "04",
    icon: Cpu,
    color: "#39ff14",
    title: "Производство",
    desc: "Мастера изготавливают корпус, монтируют электронику, устанавливают программное обеспечение и загружают игры.",
    duration: "7–10 дней",
  },
  {
    num: "05",
    icon: Package,
    color: "#00d4ff",
    title: "Контроль качества",
    desc: "Каждый автомат проходит 48-часовое тестирование. Проверяем все игры, кнопки, LED-подсветку и звук.",
    duration: "2 дня",
  },
  {
    num: "06",
    icon: Truck,
    color: "#bf5fff",
    title: "Доставка и установка",
    desc: "Упаковываем и доставляем. Наш специалист устанавливает автомат на месте, подключает и тестирует в вашем заведении.",
    duration: "1–5 дней",
  },
  {
    num: "07",
    icon: HeadphonesIcon,
    color: "#ff2d78",
    title: "Поддержка и сопровождение",
    desc: "Мы не исчезаем после продажи. Персональный менеджер, гарантийное обслуживание, советы по маркетингу и турнирам.",
    duration: "∞",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508] to-transparent" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#ffe600]/30 bg-[#ffe600]/5">
            <span className="text-xs font-semibold text-[#ffe600] uppercase tracking-widest">Процесс работы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #ffe600, #ff6b1a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>7 шагов к вашей аркаде</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            От первого звонка до работающего автомата в вашем заведении — прозрачный процесс без сюрпризов.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2d78]/20 via-[#00d4ff]/20 to-[#ff2d78]/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.05 * i }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } pb-8 lg:pb-12`}
                >
                  {/* Content */}
                  <div className={`flex-1 lg:${isLeft ? "pr-16 text-right" : "pl-16 text-left"}`}>
                    <div
                      className="inline-flex items-start gap-4 group cursor-default"
                      style={{ flexDirection: isLeft ? "row-reverse" : "row" }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
                          <span className="text-xs text-[#f0f0f8]/30 font-mono">{step.duration}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: step.color + "20", color: step.color }}>
                            шаг {step.num}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#f0f0f8]/55 leading-relaxed max-w-sm" style={{ marginLeft: isLeft ? "auto" : "0" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="w-14 h-14 rounded-sm flex items-center justify-center"
                      style={{
                        background: step.color + "20",
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 20px ${step.color}50`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{
                        background: step.color + "20",
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 15px ${step.color}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Right spacer */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div
            className="inline-block px-8 py-6 border border-[#00d4ff]/20 rounded-sm"
            style={{ background: "rgba(0,212,255,0.03)" }}
          >
            <p className="text-white font-bold text-xl mb-2">Готовы начать?</p>
            <p className="text-[#f0f0f8]/50 text-sm mb-4">Производство занимает 10 рабочих дней с момента подписания договора</p>
            <button
              onClick={() => {
                const el = document.querySelector("#contacts");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 font-bold uppercase tracking-wider btn-neon-solid-pink rounded-sm text-sm"
            >
              Оставить заявку
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
