import Link from "next/link";

function notFound() {
  return (
    <div className='   text-center'>
      <h1 className=' text-9xl'>NOT FOUND</h1>
      <Link href='/' className=' text-amber-800'>
        Go to Home
      </Link>
      <p>Страница не найдена</p>
    </div>
  );
}

export default notFound;
