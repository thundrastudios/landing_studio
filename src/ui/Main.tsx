import Image from "next/image";

function Main() {
  return (
    <div
      className='overflow-x-hidden transition-all duration-200'
      data-aos='zoom-in'
    >
      {" "}
      {/* глобально запрещаем по оси X */}
      <div className='relative sm:min-h-screen flex items-center justify-center px-4 md:px-8 h-100% mb-20'>
        {/* Контейнер с отступами и скруглением */}
        <div className='relative w-full rounded-4xl overflow-hidden shadow-xl max-w-full md:h-svh '>
          {/* Фон (маcштабируемый) */}

          <Image
            className=' object-cover object-center blur-sm rounded-4xl sm:px-5  '
            src='/herobg.jpeg' // файл в /public
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
          <div className='relative z-10 text-center px-6 md:px-12 lg:px-20 md:py-24 pt-20 sm:mt-60 '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight'>
              Thundra Studio <br />
              <span className='text-blue-200'>Студия digital-решений</span>
            </h1>

            <a
              href='#'
              className='inline-block mt-8 md:mt-30 text-lg md:text-xl bg-gray-900/70 border-2 border-gray-600 rounded-3xl px-6 py-5 hover:bg-gray-800 transition-all duration-250 text-white '
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
