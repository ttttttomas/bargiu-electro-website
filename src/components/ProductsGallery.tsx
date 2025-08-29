"use client";
import {useState} from "react";

import {Product} from "@/types";

export default function ProductGallery({product}: {product: Product}) {
  const [selected, setSelected] = useState<number | null>(null);

  const mainSrc = selected !== null ? product.images[selected] : product.main_image;

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* Thumbnails */}
      <div className="flex h-full items-center justify-center gap-7 md:flex-col">
        {product.images.slice(0, 4).map((src: string, i: number) => (
          <button
            key={i}
            className={`cursor-pointer focus:outline-none ${
              selected === i ? "ring-secondary rounded-xl ring-2" : "hover:opacity-80"
            }`}
            type="button"
            onClick={() => {
              setSelected(i);
            }}
          >
            <img
              alt="Miniatura"
              className="h-24 w-64 rounded-xl border object-cover"
              src={`https://${src}`}
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative mt-1 h-full">
        {!product.stock && (
          <small className="bg-secondary absolute top-2 left-2 rounded-xl px-4 py-1 text-[10px] font-bold text-white italic">
            sin stock
          </small>
        )}
        <img
          alt={product.title}
          className="h-[480px] w-full rounded-xl border object-cover"
          src={`https://${mainSrc}`}
        />
      </div>
    </div>
  );
}
