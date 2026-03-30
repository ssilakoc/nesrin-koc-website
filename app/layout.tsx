import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psikolog Nesrin Koç | Online Psikolojik Danışmanlık",
  description:
    "Çocuk, ergen ve yetişkinler için online psikolojik danışmanlık hizmetleri. İstanbul Medipol Üniversitesi mezunu Psikolog Nesrin Koç ile güvenli ve profesyonel destek.",
  keywords:
    "psikolog, online terapi, çocuk psikolojisi, ergen psikolojisi, psikolojik danışmanlık, Nesrin Koç",
  openGraph: {
    title: "Psikolog Nesrin Koç | Online Psikolojik Danışmanlık",
    description:
      "Çocuk, ergen ve yetişkinler için online psikolojik danışmanlık hizmetleri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
