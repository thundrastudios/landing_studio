function Contacts() {
  return (
    <div className='text-center flex flex-col' data-aos='fade-up'>
      <h2 className='md:text-6xl md:p-20 text-3xl mt-30'>Свяжитесь с нами</h2>
      <form
        action=''
        className='text-2xl p-3 flex flex-col text-center justify-center items-center'
      >
        <label htmlFor='' className='p-3' data-aos='zoom-out'>
          Ваше Имя:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='p-2 border-2 border-gray-500 rounded-4xl'
          data-aos='fade-left'
        />
        <label htmlFor='' className='p-3' data-aos='zoom-out'>
          Ваши контактные данные:
        </label>
        <input
          type='tel'
          name='tel'
          id='tel'
          className='p-2 border-2 border-gray-500 rounded-4xl'
          data-aos='fade-right'
        />
        <button
          type='submit'
          className='m-5 bg-green-500/35 py-2 px-3 rounded-3xl hover:bg-green-600 transition-all duration-150'
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Contacts;
