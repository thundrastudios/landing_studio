import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Script from "next/script";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-black  text-gray-200  
        overflow-x-hidden `}
      >
        <Script id='ym-tag' strategy='afterInteractive'>
          {`
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];
  k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(104282067, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
`}
        </Script>
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/104282067'
              style={{ position: "absolute", left: "-9999px" }}
              alt=''
            />
          </div>
        </noscript>
        {children}
      </body>
      <Script src='https://example.com/sdk.js' strategy='afterInteractive' />
      {/* или совсем не критичные */}
      <Script src='https://example.com/extra.js' strategy='lazyOnload' />
    </html>
  );
}
