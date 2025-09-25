// app/thanks/page.tsx
"use client";

import { useEffect } from "react";

export default function ThanksPage() {
  useEffect(() => {
    // отправляем событие Lead в VK
    // (если скрипт ещё подгружается — вызов просто проигнорируется без ошибок)
    // название события можно настроить в кабинете VK Ads
    // пример: 'Lead' или 'Submit'
    try {
      // @ts-expect-error VK on window
      window.VK && window.VK.Retargeting && window.VK.Retargeting.Event("Lead");
    } catch (e) {
      console.warn("VK Lead event error", e);
    }
  }, []);

  return (
    <main className='min-h-dvh grid place-items-center p-8 text-center'>
      <div className='max-w-md space-y-3'>
        <h1 className='text-2xl font-semibold'>Спасибо! 🙌</h1>
        <p>Мы свяжемся с вами в течение 1 часа.</p>
        <a href='/' className='inline-block rounded-lg px-4 py-2 border'>
          Вернуться на главную
        </a>
      </div>
    </main>
  );
}
