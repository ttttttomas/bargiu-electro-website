"use client";
import {useState, useEffect} from "react";
import Link from "next/link";

import {Product} from "@/types";

import productService from "@/app/services/productServices";

export default function ListProducts({onChange}: {onChange: () => void}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const filtered = products.filter(
    (product) =>
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const loadProducts = async () => {
      const products = await productService.getAll();

      setProducts(products);
      setLoading(false);
      setFilteredProducts(products);
    };

    void loadProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredProducts(filtered);
  };

  const redirectProduct = () => {
    onChange();
  };

  return (
    <section className="absolute top-17 right-0 z-50 w-full bg-white text-red-500 shadow-lg shadow-black/40 md:w-[400px]">
      <div className="flex flex-col items-center justify-between">
        {loading ? (
          <div className="my-2">{/* <Loading /> */}</div>
        ) : (
          <>
            <input
              className="my-2 w-full px-5 text-sm font-bold text-black md:text-base"
              placeholder="¿Que vehiculo estás buscando?"
              type="text"
              onChange={handleChange}
            />
            <ul className="flex h-40 w-full flex-col items-center justify-between gap-2 overflow-y-scroll md:items-start">
              {filteredProducts.map((product: Product) => (
                <Link
                  key={product.id}
                  className="flex items-center justify-around gap-2"
                  href={`/products/category/${product.category}/${product.id}`}
                  onClick={redirectProduct}
                >
                  <img
                    alt={product.title}
                    className="w-18 pl-2"
                    loading="lazy"
                    src={`https://${product.main_image}`}
                  />
                  <div className="flex flex-col pl-10">
                    <div className="flex flex-col items-center gap-1 md:flex-row">
                      <p className="text-xs font-semibold md:text-sm">{product.title}</p>
                      <p className="text-xs font-semibold md:text-sm">
                        {product.category.toUpperCase()}
                      </p>
                    </div>
                    <small className="mx-auto text-center">{}</small>
                  </div>
                </Link>
              ))}
            </ul>
          </>
        )}
        {filteredProducts.length === 0 && !loading && (
          <div className="flex items-center justify-center">
            <p className="text-start font-bold text-red-500">No hay resultados</p>
          </div>
        )}
      </div>
    </section>
  );
}
