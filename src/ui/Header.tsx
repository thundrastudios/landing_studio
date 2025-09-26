"use client";

const Header = () => {
  return (
    <header
      className='flex items-center justify-between md:py-6 md:px-40 md:text-2xl py-4 px-3 '
      data-aos='zoom-out'
    >
      <h1 className='text-violet-700 md:text-4xl text-xl'>ThundraStudio</h1>
      <div className='flex items-center'>
        <a
          href='#form-itcontacts'
          className='inline-block px-1 py-2 text-lg md:text-xl bg-violet-900/10 border-2 border-gray-600 rounded-3xl md:px-4 md:py-1 hover:bg-violet-800/60 transition-all duration-250 text-violet-600 hover:text-slate-50 '
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
};

export default Header;
