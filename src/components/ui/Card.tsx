import Link from "next/link";

import {Product} from "@/types";

import {openSans} from "@/lib/fonts";

export default function Card({product}: {product: Product}) {
  const formattedPrice = product.price.toLocaleString("es-ES", {
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Link
      className={`w-88 flex-col items-center ${openSans.className}`}
      href={`/products/category/${product.category}/${product.id}`}
    >
      <div className="relative">
        <small className="bg-secondary absolute top-2 left-2 rounded-xl px-4 py-1 text-[10px] font-bold text-white italic">
          {product.stock ? "En stock" : "Sin stock"}
        </small>
        <img
          alt="card"
          className="h-62 w-full rounded-2xl border border-black bg-white object-contain"
          src={`https://${product.main_image}`}
        />
      </div>
      <div className="justify- flex flex-col items-center gap-2 px-5 py-2">
        <p className="text-center font-semibold">
          {product.title.length > 35 ? product.title.slice(0, 35) + "..." : product.title}
        </p>
        <b className="text-secondary text-3xl">${formattedPrice}</b>
      </div>
    </Link>
  );
}
