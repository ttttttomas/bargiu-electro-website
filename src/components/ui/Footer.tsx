import Link from "next/link";

import {
  Cocinas,
  Climatizacion,
  Termotanques,
  Heladeras,
  Lavarropas,
  Deportes,
  Belleza,
  Electros,
  Tecnologia,
  Herramientas,
  Textiles,
  Airelibre,
  Colchones,
} from "@/components/ui/icons/SvgsFooter";

export default function Footer() {
  return (
    <footer className="footer flex flex-col items-center justify-around">
      <section className="mb-20 flex flex-col items-center justify-around gap-30 xl:flex-row">
        <img alt="" src="logo.png" />
        <div className="flex flex-col gap-10 divide-x-0 divide-y divide-black/30 md:flex-row md:divide-x md:divide-y-0">
          <ul className="text-medium flex flex-col items-center justify-center gap-3 px-10 md:items-start md:justify-start">
            <Link className="flex items-center gap-2" href="/products/category/cocinas">
              <Cocinas />
              <p>Cocinas y Hornos</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/climatizacion">
              <Climatizacion />
              <p>Climatización</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/termotanques">
              <Termotanques />
              <p>Termotanques</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/heladeras">
              <Heladeras />
              <p>Heladeras / Freezers</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/lavarropas">
              <Lavarropas />
              <p>Lavarropas / Secarropas</p>
            </Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-3 px-10 md:items-start md:justify-start">
            <Link className="flex items-center gap-2" href="/products/category/deportes">
              <Deportes />
              <p>Deportes y Fitness</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/belleza">
              <Belleza />
              <p>Belleza y cuidado personal</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/electros">
              <Electros />
              <p>Pequeños Electros</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/tecnologia">
              <Tecnologia />
              <p>Tecnología</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/herramientas">
              <Herramientas />
              <p>Herramientas</p>
            </Link>
          </ul>
          <ul className="flex flex-col items-center justify-center gap-3 px-10 md:items-start md:justify-start">
            <Link className="flex items-center gap-2" href="/products/category/textiles">
              <Textiles />
              <p>Textiles</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/airelibre">
              <Airelibre />
              <p>Aire libre</p>
            </Link>
            <Link className="flex items-center gap-2" href="/products/category/colchones">
              <Colchones />
              <p>Colchones</p>
            </Link>
          </ul>
        </div>
      </section>
      <section className="flex w-full items-center justify-between bg-white px-5 font-bold md:px-10">
        <p>©2025 - Todos los derechos reservados</p>
        <div className="flex items-center justify-between gap-5">
          <p>Desarrollado por </p>
          <Link href="https://iwebtecnology.com" target="_blank">
            <img alt="logo" className="h-14 w-20 object-cover" src="/iweb.png" />
          </Link>
        </div>
      </section>
    </footer>
  );
}
