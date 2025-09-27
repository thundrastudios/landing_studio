function Main() {
  return (
    <div
      className='overflow-x-hidden transition-all duration-200  flex flex-col items-center justify-center min-h-screen md:px-40 rounded-3xl  '
      data-aos='zoom-in'
    >
      {/* глобально запрещаем по оси X */}
      <div className='text-center px-6 md:px-12  md:py-24 pt-20 sm:mt-30 flex-col justify-center bg-[url("/img_hero/image.png")] bg-cover mask-b-from-80%  pb-40 '>
        <span className='text-purple-600/95 md:text-7xl text-2xl'>
          Разработаем продающий сайт под ключ для вашего бизнеса от 5 000 ₽ за 1
          неделю
        </span>
        <br />

        <a
          href='#form-itcontacts'
          className='inline-block mt-8 md:mt-30 md:p-10 p-5 text-xl md:text-4xl bg-violet-800/30 border-2 border-gray-600 rounded-3xl px-6 py-5 hover:bg-violet-800/60 transition-all duration-350 text-violet-600 hover:scale-110 hover:text-slate-50'
        >
          Заказать сайт!
        </a>
      </div>

      {/* Контейнер с отступами и скруглением */}
    </div>
  );
}

export default Main;
