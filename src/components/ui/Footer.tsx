import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer flex flex-col items-center justify-around">
      <section className="mb-20 flex flex-col items-center justify-around gap-30 xl:flex-row">
        <img alt="" src="logo.png" />
        <div className="flex flex-col gap-10 divide-x-0 divide-y divide-black/30 md:flex-row md:divide-x md:divide-y-0">
          <ul className="text-medium flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/">Cocinas y Hornos</Link>
            <Link href="/">Climatización</Link>
            <Link href="/">Termotanques</Link>
            <Link href="/">Heladeras / Freezers</Link>
            <Link href="/">Lavarropas / Secarropas</Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/">Deportes y Fitness</Link>
            <Link href="/">Belleza y cuidado personal</Link>
            <Link href="/">Pequeños Electros</Link>
            <Link href="/">Tecnología</Link>
            <Link href="/">Herramientas</Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-2 px-10 md:items-start md:justify-start">
            <Link href="/">Textiles</Link>
            <Link href="/">Aire libre</Link>
            <Link href="/">Colchones</Link>
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
