"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Send, MessageCircle, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";

type FormType = "calculate" | "presentation" | "rental";

const FORM_CONFIGS = {
  calculate: {
    title: "Рассчитать стоимость",
    color: "#ff2d78",
    desc: "Получите точный расчёт под ваш бизнес и бюджет",
    fields: [
      { name: "name", label: "Ваше имя", type: "text", placeholder: "Александр" },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "business", label: "Тип заведения", type: "select", options: ["Бар / Ресторан", "Кальянная", "Антикафе", "Барбершоп", "ТЦ", "Офис", "Отель", "Другое"] },
      { name: "model", label: "Интересующая модель", type: "select", options: ["eNCOM MAX — 117 900 ₽", "eNCOM LITE — 89 900 ₽", "eNCOM COMPACT — 49 900 ₽", "Несколько автоматов", "Не знаю — нужна консультация"] },
      { name: "comment", label: "Комментарий (необязательно)", type: "textarea", placeholder: "Расскажите о вашем заведении..." },
    ],
  },
  presentation: {
    title: "Записаться на презентацию",
    color: "#00d4ff",
    desc: "Бесплатная презентация в нашем шоуруме в Москве",
    fields: [
      { name: "name", label: "Ваше имя", type: "text", placeholder: "Александр" },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "date", label: "Удобная дата", type: "text", placeholder: "например, 25 апреля, первая половина дня" },
      { name: "business", label: "Тип заведения", type: "select", options: ["Бар / Ресторан", "Кальянная", "Антикафе", "Барбершоп", "ТЦ", "Офис", "Отель", "Другое"] },
      { name: "comment", label: "Вопросы заранее", type: "textarea", placeholder: "Что хотите узнать на встрече?" },
    ],
  },
  rental: {
    title: "Арендовать автомат",
    color: "#39ff14",
    desc: "Аренда от 7 000 ₽/день с доставкой и установкой",
    fields: [
      { name: "name", label: "Ваше имя", type: "text", placeholder: "Александр" },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "address", label: "Адрес доставки", type: "text", placeholder: "Москва, ул. Пушкина, 1" },
      { name: "dates", label: "Даты аренды", type: "text", placeholder: "например, 1–3 мая" },
      { name: "model", label: "Модель автомата", type: "select", options: ["eNCOM MAX", "eNCOM LITE", "eNCOM COMPACT", "Без разницы"] },
      { name: "comment", label: "Мероприятие / цель", type: "textarea", placeholder: "Расскажите о событии..." },
    ],
  },
};

export default function Contacts() {
  const [activeForm, setActiveForm] = useState<FormType>("calculate");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const config = FORM_CONFIGS[activeForm];

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setFormData({});
    }, 4000);
  };

  return (
    <section id="contacts" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508] to-[#030306]" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#ff2d78]/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-[#ff2d78]/30 bg-[#ff2d78]/5">
            <span className="text-xs font-semibold text-[#ff2d78] uppercase tracking-widest">Контакты</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            <span style={{
              background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Давайте обсудим</span>
          </h2>
          <p className="text-lg text-[#f0f0f8]/60 max-w-2xl mx-auto">
            Выберите удобный способ связи или заполните форму — ответим в течение 15 минут в рабочее время.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info + direct links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick contacts */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Связаться прямо сейчас</h3>
              <div className="space-y-3">
                <a
                  href="tel:+79299927271"
                  className="flex items-center gap-4 p-4 rounded-sm border border-white/8 hover:border-[#ff2d78]/40 transition-all group"
                  style={{ background: "rgba(10,10,20,0.7)" }}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#ff2d78]/15 border border-[#ff2d78]/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#ff2d78]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#f0f0f8]/40 uppercase tracking-wider">Телефон</div>
                    <div className="text-white font-semibold group-hover:text-[#ff2d78] transition-colors">
                      +7 (929) 992-72-71
                    </div>
                  </div>
                </a>

                <a
                  href="https://t.me/encomarcade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-sm border border-white/8 hover:border-[#00d4ff]/40 transition-all group"
                  style={{ background: "rgba(10,10,20,0.7)" }}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#00d4ff]/15 border border-[#00d4ff]/30 flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#f0f0f8]/40 uppercase tracking-wider">Telegram</div>
                    <div className="text-white font-semibold group-hover:text-[#00d4ff] transition-colors">
                      @encomarcade
                    </div>
                    <div className="text-xs text-[#f0f0f8]/30">Отвечаем за 15 минут</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/79299927271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-sm border border-white/8 hover:border-[#39ff14]/40 transition-all group"
                  style={{ background: "rgba(10,10,20,0.7)" }}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#39ff14]/15 border border-[#39ff14]/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#39ff14]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#f0f0f8]/40 uppercase tracking-wider">WhatsApp</div>
                    <div className="text-white font-semibold group-hover:text-[#39ff14] transition-colors">
                      +7 (929) 992-72-71
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Address & hours */}
            <div className="space-y-3">
              <div
                className="flex items-start gap-4 p-4 rounded-sm border border-white/8"
                style={{ background: "rgba(10,10,20,0.7)" }}
              >
                <div className="w-10 h-10 rounded-sm bg-[#bf5fff]/15 border border-[#bf5fff]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#bf5fff]" />
                </div>
                <div>
                  <div className="text-xs text-[#f0f0f8]/40 uppercase tracking-wider mb-1">Адрес шоурума</div>
                  <div className="text-white font-medium text-sm">Москва</div>
                  <div className="text-xs text-[#f0f0f8]/40">Доставка по всей России</div>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-4 rounded-sm border border-white/8"
                style={{ background: "rgba(10,10,20,0.7)" }}
              >
                <div className="w-10 h-10 rounded-sm bg-[#ffe600]/15 border border-[#ffe600]/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#ffe600]" />
                </div>
                <div>
                  <div className="text-xs text-[#f0f0f8]/40 uppercase tracking-wider mb-1">Режим работы</div>
                  <div className="text-white font-medium text-sm">Пн–Пт: 10:00–19:00</div>
                  <div className="text-sm text-[#f0f0f8]/50">Сб: 11:00–17:00 МСК</div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://t.me/encomarcade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider btn-neon-blue rounded-sm"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://wa.me/79299927271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-sm border-2 border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14] hover:text-black transition-all"
                style={{ boxShadow: "0 0 10px rgba(57,255,20,0.3)" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Forms */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Form type selector */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {(Object.keys(FORM_CONFIGS) as FormType[]).map((type) => {
                const c = FORM_CONFIGS[type];
                return (
                  <button
                    key={type}
                    onClick={() => { setActiveForm(type); setFormData({}); setStatus("idle"); }}
                    className="px-3 py-2.5 text-xs font-semibold rounded-sm transition-all duration-200 uppercase tracking-wider"
                    style={
                      activeForm === type
                        ? { background: c.color + "20", border: `2px solid ${c.color}`, color: c.color, boxShadow: `0 0 15px ${c.color}30` }
                        : { background: "rgba(10,10,20,0.6)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(240,240,248,0.5)" }
                    }
                  >
                    {type === "calculate" ? "Рассчитать" : type === "presentation" ? "Презентация" : "Аренда"}
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <div
              className="rounded-sm p-6 sm:p-8 border transition-all duration-300"
              style={{
                background: "rgba(8,8,18,0.9)",
                borderColor: config.color + "30",
                boxShadow: `0 0 40px ${config.color}10`,
              }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-black text-white mb-1">{config.title}</h3>
                <p className="text-sm" style={{ color: config.color }}>{config.desc}</p>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: config.color + "20", border: `2px solid ${config.color}` }}
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: config.color }} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h4>
                    <p className="text-[#f0f0f8]/60 text-sm">
                      Мы свяжемся с вами в течение 15 минут в рабочее время.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key={activeForm}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {config.fields.map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-[#f0f0f8]/50 uppercase tracking-wider mb-1.5">
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={e => handleChange(field.name, e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 text-sm rounded-sm transition-all duration-200 resize-none outline-none"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: `1px solid rgba(255,255,255,0.1)`,
                              color: "#f0f0f8",
                            }}
                            onFocus={e => {
                              e.currentTarget.style.borderColor = config.color + "60";
                              e.currentTarget.style.boxShadow = `0 0 0 1px ${config.color}30`;
                            }}
                            onBlur={e => {
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        ) : field.type === "select" ? (
                          <select
                            value={formData[field.name] || ""}
                            onChange={e => handleChange(field.name, e.target.value)}
                            required={field.name !== "comment"}
                            className="w-full px-4 py-3 text-sm rounded-sm transition-all duration-200 outline-none cursor-pointer appearance-none"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: `1px solid rgba(255,255,255,0.1)`,
                              color: formData[field.name] ? "#f0f0f8" : "rgba(240,240,248,0.3)",
                            }}
                          >
                            <option value="" disabled>Выберите...</option>
                            {field.options?.map(opt => (
                              <option key={opt} value={opt} style={{ background: "#0a0a14", color: "#f0f0f8" }}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={e => handleChange(field.name, e.target.value)}
                            required={field.name !== "comment"}
                            className="w-full px-4 py-3 text-sm rounded-sm transition-all duration-200 outline-none"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: `1px solid rgba(255,255,255,0.1)`,
                              color: "#f0f0f8",
                            }}
                            onFocus={e => {
                              e.currentTarget.style.borderColor = config.color + "60";
                              e.currentTarget.style.boxShadow = `0 0 0 1px ${config.color}30`;
                            }}
                            onBlur={e => {
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 font-bold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: `linear-gradient(135deg, ${config.color}, ${config.color}aa)`,
                        color: "#000",
                        boxShadow: `0 0 20px ${config.color}40`,
                        opacity: status === "submitting" ? 0.7 : 1,
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        config.title
                      )}
                    </button>

                    <p className="text-xs text-[#f0f0f8]/25 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
