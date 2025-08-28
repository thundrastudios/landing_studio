import Link from "next/link";

function notFound() {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Link href='/'>Go to Home</Link>
      <p>Страница не найдена</p>
    </div>
  );
}

export default notFound;
