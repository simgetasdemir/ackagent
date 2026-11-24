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
  title: "ACK Dijital Ajans | Performans pazarlaması, SEO ve sosyal medya",
  description:
    "İstanbul merkezli dijital pazarlama ajansı. Google Ads, Meta, TikTok, SEO, pazaryeri yönetimi ve GA4 ölçümleme hizmetleri.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-navy">{children}</body>
    </html>
  );
}
