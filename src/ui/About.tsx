function About() {
  const aboutpeum = [
    "🚀 Быстрые сроки",
    "🎯 Индивидуальный подход",
    "🔒 Надежность и поддержка",
    "💡 Современные технологии",
  ];
  return (
    <div className='   md:p-20'>
      <h2
        className='text-center md:text-5xl text-blue-300/60 text-3xl'
        data-aos='zoom-in'
      >
        Кто мы?
      </h2>
      <div>
        <p
          className=' md:text-3xl md:p-30 md:px-70 text-center px-6 pt-5'
          data-aos='zoom-in'
        >
          Мы — молодая команда разработчиков, которая создает современные сайты
          и веб-сервисы. Наш подход — простота, скорость и внимание к деталям.
          Мы работаем на стеке React, Next.js и TypeScript, что позволяет
          выпускать быстрые, безопасные и удобные решения.
        </p>
        <h3
          className='md:text-5xl md:py-10 md:px-40 text-3xl mt-20 px-5'
          data-aos='zoom-in'
        >
          Наши Преимущества:
        </h3>
        <ul className='md:text-3xl md:px-70 ' data-aos='fade-up'>
          {aboutpeum.map((e) => (
            <li
              className='py-4  border-4 border-gray-500 m-3  text-center rounded-4xl hover:bg-violet-600/15  hover:text-violet-600/80 transition-all duration-300'
              key={e.valueOf()}
            >
              {e.toString()}
            </li>
          ))}
        </ul>
        <p
          className='md:text-3xl text-center md:mt-10 md:py-20 md:px-100 mt-10 px-5'
          data-aos='fade-down'
        >
          За нашей студией стоят разработчики и дизайнеры с опытом коммерческой
          работы и запуском реальных проектов.
        </p>
      </div>
    </div>
  );
}

export default About;
