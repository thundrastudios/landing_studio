import Image from "next/image";

function Main() {
  return (
    <div
      className='overflow-x-hidden transition-all duration-200'
      data-aos='zoom-in'
    >
      {/* глобально запрещаем по оси X */}
      <div className='relative sm:min-h-screen flex items-center justify-center px-4 md:px-8 h-100% mb-20'>
        {/* Контейнер с отступами и скруглением */}
        <div className='relative w-full rounded-4xl overflow-hidden shadow-xl max-w-full md:h-svh '>
          {/* Фон (маcштабируемый) */}

          <Image
            className=' object-cover object-center blur-sm rounded-4xl sm:px-5  '
            src='/herobg.webp' // файл в /public
            alt='' // фон — можно пустой alt
            fill // растянуть на весь контейнер
            priority // <- приоритетная загрузка
            sizes='80vw'
            aria-hidden
          />

          {/* Виньетка / градиент поверх фонового изображения */}
          <div
            className='absolute inset-0 pointer-events-none '
            style={{
              background:
                // radial (центральная зона прозрачнее) + linear (затемнение сверху/снизу)
                `radial-gradient(ellipse at center, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.65) 100%),
                 linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))`,
              mixBlendMode: "normal",
            }}
            aria-hidden
          />

          {/* Контент поверх */}
          <div className='relative z-10 text-center px-6 md:px-12 lg:px-20 md:py-24 pt-20 sm:mt-30  '>
            <h1 className=' text-3xl sm:text-8xl  font-extrabold text-violet-700 leading-tight '>
              Thundra Studio <br />
              <span className='text-violet-400/95 md:text-7xl text-2xl '>
                Разработаем сайт под ключ для вашего бизнеса от 5 000 ₽, за 1
                неделю!
              </span>
            </h1>

            <a
              href='#form-itcontacts'
              className='inline-block mt-8 md:mt-30 md:p-10 p-5 text-xl md:text-4xl bg-violet-800/30 border-2 border-gray-600 rounded-3xl px-6 py-5 hover:bg-violet-800/60 transition-all duration-350 text-violet-600 hover:scale-120 hover:text-slate-50'
            >
              Заказать сайт!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
