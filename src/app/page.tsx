import Link from "next/link";

import {Product} from "@/types";

import {openSans} from "@/lib/fonts";
import Wpp from "@/components/ui/icons/Wpp";
import Card from "@/components/ui/Card";
import Categorys from "@/components/ui/Categorys";

import productService from "./services/productServices";

export default async function HomePage() {
  const products: Product[] = await productService.getAll();

  const climatizacion = products.filter((p) => p.category === "climatizacion");
  const lavarropas = products.filter((p) => p.category === "lavarropas");

  return (
    <main>
      <Categorys />
      <section id="hero">
        <div
          className="absolute -z-10 h-screen w-full opacity-40"
          style={{
            backgroundImage: `url(/bg-header.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex h-screen flex-col items-center justify-end gap-5 pb-10 text-center md:pb-20">
          <p className="w-full px-3 text-lg font-medium text-wrap italic md:w-1/2 md:px-0 md:text-2xl">
            Equipá tu hogar con lo mejor en tecnología y electrodomésticos. Precios increíbles y
            atención inmediata por WhatsApp.
          </p>
          <Link
            className="bg-secondary rounded-2xl px-4 py-3 font-medium text-white"
            href="#main_products"
          >
            Ver productos
          </Link>
          <Wpp />
        </div>
      </section>
      <section className="m-10 flex flex-col items-center" id="main_products">
        <h2 className="text-center text-4xl font-medium italic">Climatización</h2>
        <Link className="my-5 text-center italic underline" href="/">
          Ver todos
        </Link>
        <div className="mb-20 flex flex-wrap items-center justify-center gap-10 md:justify-between">
          {climatizacion.slice(0, 4).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <h2 className="text-center text-4xl font-medium italic">Lavarropas / Secarropas</h2>
        <Link className="my-5 text-center italic underline" href="/">
          Ver todos
        </Link>
        <div className="ustify-between mb-20 flex flex-wrap gap-10">
          {lavarropas.slice(0, 4).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section id="images">
        <img alt="image-home" className="h-[50vh] w-full object-cover" src="image-home.png" />
      </section>
      <section
        className={`mx-20 my-30 flex flex-wrap items-center justify-around gap-y-10 ${openSans.className}`}
        id="categories"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            alt="heladera"
            className="h-[500px] w-96 rounded-xl object-cover"
            src="heladera-home.png"
          />
          <Link className="font-semibold underline" href="/products/category/heladeras">
            Ver mas Heladeras...
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            alt="televisor"
            className="h-[500px] w-96 rounded-xl object-cover"
            src="televisor-home.png"
          />
          <Link className="font-semibold underline" href="/products/category/televisores">
            Ver mas Televisores...
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            alt="microondas"
            className="h-[500px] w-96 rounded-xl object-cover"
            src="microondas-home.png"
          />
          <Link className="font-semibold underline" href="/products/category/microondas">
            Ver mas Microondas...
          </Link>
        </div>
      </section>
    </main>
  );
}
