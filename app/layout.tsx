import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://encomarcade.ru"),
  title: {
    default: "Encom Arcade — Аркадные автоматы для бизнеса",
    template: "%s | Encom Arcade",
  },
  description:
    "Производитель аркадных автоматов с уникальным дизайном. Более 250 автоматов с 2019 года. Гарантия 1 год, производство за 10 дней. Аренда от 7000 ₽/день. Доставка по всей России.",
  keywords: [
    "аркадные автоматы",
    "игровые автоматы для бизнеса",
    "аркада для бара",
    "ретро аркада",
    "аркадный автомат купить",
    "аркадный автомат аренда",
    "Encom Arcade",
    "аркадные автоматы Москва",
    "игровые автоматы для ресторана",
    "аркада для антикафе",
  ],
  authors: [{ name: "Encom Arcade" }],
  creator: "Encom Arcade",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://encomarcade.ru",
    siteName: "Encom Arcade",
    title: "Encom Arcade — Аркадные автоматы для бизнеса",
    description:
      "Привлекайте клиентов, увеличивайте средний чек и создавайте wow-эффект с аркадными автоматами Encom. Производство за 10 дней, гарантия 1 год.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Encom Arcade — Аркадные автоматы для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Encom Arcade — Аркадные автоматы для бизнеса",
    description:
      "Аркадные автоматы для баров, кальянных, антикафе и других заведений. Более 150 игр на русском языке.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f0f0f8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
