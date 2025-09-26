import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type ServiceList = IService[];
interface IService {
  serviceName: string;
  serviceCount: number;
  serviceImg: string | StaticImport;
  serviceDescription: string[];
}
export function Services() {
  // Removed unused servic function

  const Services: IService[] = [
    {
      serviceName: "Лендинг",
      serviceCount: 5000,
      serviceImg: "/landing.webp",
      serviceDescription: [
        "📌 Одностраничный сайт для презентации компании, товара или услуги.",
        "⚡ Быстрая разработка: от 5 дней.",
        "🎯 Помогает собрать заявки и протестировать нишу.",
        "📱 Адаптивный дизайн (корректно работает на телефонах и ПК).",
        "🔍 SEO-оптимизация для поисковиков.",
      ],
    },
    {
      serviceName: "Сайт под ключ",
      serviceCount: 10000,
      serviceImg: "/webforkeys.webp",
      serviceDescription: [
        "🏢 Полноценный сайт для бизнеса, компании или проекта.",
        "📑 Несколько страниц: главная, услуги, контакты, кейсы, блог и др.",
        "🎨 Индивидуальный дизайн + фирменный стиль.",
        "🛠 Подключение форм, карт, чатов и аналитики.",
        "🔐 Возможность расширения (личный кабинет, магазин, CRM).",
      ],
    },
  ];
  return (
    <div>
      <h1 className='text-6xl text-center my-25'>Наши услуги</h1>
      <ul
        className='flex flex-col md:flex-row justify-center my-25 '
        data-aos='fade-right'
      >
        {Services.map((serv) => (
          <li
            key={serv.serviceName}
            className='flex flex-col md:flex-row border-2 md:mx-10 md:px-5 rounded-4xl bg-gray-800/15  hover:bg-violet-900/10 hover:scale-110 transition-all duration-500 hover:text-violet-700 my-8 py-10 '
          >
            <div>
              <h2 className='text-4xl p-5 text-center  '>{serv.serviceName}</h2>

              <ul className='text-md p-3 py-15'>
                {serv.serviceDescription.map((s) => (
                  <li key={s.valueOf()} className='py-1.5 text-lg'>
                    {s}
                  </li>
                ))}
              </ul>
              <h2 className='text-3xl pl-15 py-5'>
                Цена от {serv.serviceCount} рублей
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
