import { Instagram, Send } from "lucide-react";

function Footer() {
  return (
    <footer className='border-t-2 border-gray-500 py-5 text-center'>
      <h3>Thundra Studios</h3>
      <p>© 2025 Thundra Studios. Все права защищены.</p>
      <div className=' flex justify-center '>
        <a href='https://t.me/thundrastudio' className='px-2'>
          <Send className='text-blue-600' />
        </a>
        <a
          href='https://www.instagram.com/thundra_studios?igsh=MWhvOHJla2ZqMGJi'
          className='px-2'
        >
          <Instagram className='text-amber-700' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
