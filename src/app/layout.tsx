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
  title: "ACK Dijital Ajans | Performans pazarlaması ve user acquisition",
  description:
    "User acquisition, performans pazarlaması, GA4 ve Google Tag Manager kurulumu, MMP entegrasyonu ve SKAN mapping. ACK Dijital Ajans, İstanbul.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-cream">{children}</body>
    </html>
  );
}
