"use client";

import { Zap, Phone, MessageCircle, Send, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030306] border-t border-[#00d4ff]/10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-[#ff2d78]" style={{ filter: "drop-shadow(0 0 6px #ff2d78)" }} />
              <span
                className="text-xl font-black tracking-wider uppercase"
                style={{
                  background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ENCOM ARCADE
              </span>
            </div>
            <p className="text-sm text-[#f0f0f8]/50 leading-relaxed">
              Производитель аркадных автоматов с уникальным дизайном с 2019 года. Более 250 автоматов по всей России.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "О компании" },
                { href: "#models", label: "Модели" },
                { href: "#business", label: "Для бизнеса" },
                { href: "#services", label: "Услуги" },
                { href: "#portfolio", label: "Портфолио" },
                { href: "#contacts", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-[#f0f0f8]/50 hover:text-[#00d4ff] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#ff2d78] font-semibold uppercase tracking-wider text-sm mb-4">Автоматы</h4>
            <ul className="space-y-2 text-sm text-[#f0f0f8]/50">
              <li>eNCOM MAX — 117 900 ₽</li>
              <li>eNCOM LITE — 89 900 ₽</li>
              <li>eNCOM COMPACT — 49 900 ₽</li>
              <li className="pt-2">
                <span className="text-[#bf5fff]">Аренда от 7 000 ₽/день</span>
              </li>
              <li>Индивидуальный заказ</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[#39ff14] font-semibold uppercase tracking-wider text-sm mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79299927271"
                  className="flex items-center gap-2 text-sm text-[#f0f0f8]/70 hover:text-[#39ff14] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+7 (929) 992-72-71</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/encomarcade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#f0f0f8]/70 hover:text-[#00d4ff] transition-colors"
                >
                  <Send className="w-4 h-4 flex-shrink-0" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/79299927271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#f0f0f8]/70 hover:text-[#39ff14] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#f0f0f8]/50">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Москва. Доставка по всей России</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#f0f0f8]/50">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Пн–Пт 10:00–19:00 МСК</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#f0f0f8]/30">
            © 2019–2026 Encom Arcade. Все права защищены.
          </p>
          <p className="text-xs text-[#f0f0f8]/20">
            Производство аркадных автоматов с уникальным дизайном
          </p>
        </div>
      </div>
    </footer>
  );
}
