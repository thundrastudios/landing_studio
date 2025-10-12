import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Script from "next/script";
import Image from "next/image";

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
      <link rel='shortcut icon' href='icon.png' type='image/x-icon' />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-slate-950  text-gray-200  
        overflow-x-hidden `}
      >
        {" "}
        {children}
        <Script>{`yaCounter104282067.reachGoal('{{Scroll Depth Threshold}}');`}</Script>
        {/*Google Tag Manager*/}
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KDLQZ7X4');
  `}
          {/*Google Tag Manager (noscript) */}
          <noscript>
            <Image
              src='https://www.googletagmanager.com/ns.html?id=GTM-KDLQZ7X4'
              alt=''
              height='0'
              width='0'
              className=' hidden invisible'
            ></Image>
          </noscript>
          {/*End Google Tag Manager (noscript) */}
        </Script>
        <Script id='vk-pixel' strategy='afterInteractive'>
          {`
            var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3701347", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
          `}
        </Script>
        {/* noscript fallback */}
        <noscript>
          <Image
            src='https://top-fwz1.mail.ru/counter?id=3701347;js=na'
            className='position-absolute left-[-9999px]'
            alt=''
            width={0}
            height={0}
          />
        </noscript>
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
            <Image
              src='https://mc.yandex.ru/watch/104282067'
              className='position-absolute left-[-9999px]'
              alt=''
              width={0}
              height={0}
            />
          </div>
        </noscript>
      </body>
      <Script src='https://example.com/sdk.js' strategy='afterInteractive' />
      {/* или совсем не критичные */}
      <Script src='https://example.com/extra.js' strategy='lazyOnload' />
    </html>
  );
}
