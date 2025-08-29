import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer flex flex-col items-center justify-around">
      <section className="mb-20 flex flex-col items-center justify-around gap-30 xl:flex-row">
        <img alt="" src="logo.png" />
        <div className="flex flex-col gap-10 divide-x-0 divide-y divide-black/30 md:flex-row md:divide-x md:divide-y-0">
          <ul className="text-medium flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/products/category/cocinas">Cocinas y Hornos</Link>
            <Link href="/products/category/climatizacion">Climatización</Link>
            <Link href="/products/category/termotanques">Termotanques</Link>
            <Link href="/products/category/heladeras">Heladeras / Freezers</Link>
            <Link href="/products/category/lavarropas">Lavarropas / Secarropas</Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/products/category/deportes">Deportes y Fitness</Link>
            <Link href="/products/category/belleza">Belleza y cuidado personal</Link>
            <Link href="/products/category/electros">Pequeños Electros</Link>
            <Link href="/products/category/tecnologia">Tecnología</Link>
            <Link href="/products/category/herramientas">Herramientas</Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/products/category/textiles">Textiles</Link>
            <Link href="/products/category/airelibre">Aire libre</Link>
            <Link href="/products/category/colchones">Colchones</Link>
          </ul>
        </div>
      </section>
      <section className="flex w-full items-center justify-between bg-white px-5 font-bold md:px-10">
        <p>©2025 - Todos los derechos reservados</p>
        <div className="flex items-center justify-between gap-5">
          <p>Desarrollado por </p>
          <Link href="/">
            <img alt="logo" className="h-14 w-20 object-cover" src="/iweb.png" />
          </Link>
        </div>
      </section>
    </footer>
  );
}
