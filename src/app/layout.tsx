import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Aceternity UI şablonlarıyla aynı yazı tipi: Inter.
// Türkçe karakterler (ğ, ş, ı, İ) için latin-ext alt kümesi gerekli.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACK Dijital Ajans | Veri odaklı dijital pazarlama",
  description:
    "Performans pazarlaması, veri analitiği, dönüşüm optimizasyonu ve yapay zeka destekli çözümler. ACK Dijital Ajans, İstanbul.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-cream">{children}</body>
    </html>
  );
}
