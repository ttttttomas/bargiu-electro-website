import Link from "next/link";

import Wpp from "@/components/ui/icons/Wpp";
import productService from "@/app/services/productServices";
import ButtonBack from "@/components/ui/ButtonBack";
import ProductGallery from "@/components/ProductsGallery";

export default async function ProductIdPage({params}: {params: {id: string}}) {
  const {id} = params;
  const product = await productService.getById(id);

  return (
    <main className="flex flex-col items-start justify-center md:mx-20">
      <ButtonBack />
      <section className="mx-auto flex w-full flex-col justify-center gap-32 rounded-lg p-4 md:flex-row">
        {/* Column Left: Thumbnails + Main Image */}
        <ProductGallery product={product} />
        {/* Column Right: Info */}
        <div className="flex flex-col items-center justify-center gap-4 p-2">
          <div className="flex flex-col gap-3">
            <p className="text-center text-xl font-semibold">{product.title}</p>
            <p className="text-secondary text-center text-5xl font-bold">$879.000</p>
          </div>

          <div className="mt-2 w-fit rounded-lg border-2 px-14 py-2 font-medium text-black">
            {product.stock ? (
              <Link
                href={`https://wa.me/+541135587877?text=${encodeURIComponent("Hola! Estoy interesado/a en este producto: " + product.title)}`}
                target="_blank"
                type="button"
              >
                <p>Quiero comprar</p>
                <Wpp />
              </Link>
            ) : (
              "SIN STOCK"
            )}
          </div>
        </div>
      </section>
      <section className="mx-5 my-20 flex flex-col gap-2">
        <h1 className="text-xl font-medium">Descripción</h1>
        <ul>
          {product.width && <li>Altura: {product.width} cm </li>}
          {product.height && <li>Altura: {product.height} cm </li>}
          {product.depth && <li>Altura: {product.depth} cm </li>}
          <br />
          <ul className="flex flex-col gap-3">
            <li>Características generales:</li>
            {product.details_list.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </ul>
      </section>
    </main>
  );
}
