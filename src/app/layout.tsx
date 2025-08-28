import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thundra Studios — Разработка сложных SaaS, CRM и веб-приложений",
  description:
    "Thundra Studios — Разработка сложных SaaS, CRM и веб-приложений",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <link rel='icon' href='icon.png' type='icon/png' sizes='32x32' />
      <link rel='icon' href='icon.svg' type='icon/svg+xml' />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white `}
      >
        {children}
      </body>
    </html>
  );
}
