"use client";
import { useMemo, useState } from "react";
import Card from "./ui/Card";

export default function ProductsFiltered({ products }) {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  console.log(products);
  console.log(active);

  const handleAll = () => {
    setAll(true);
    setActive("all");
  };

  const handleCategory = (category) => {
    setActive(category);
  };
  const subCategories = products.length > 0 ? products[0].sub_categorys : [];

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.sub_category_main === active.toLowerCase());
  }, [products, active]);

  const filteredAndSorted = useMemo(() => {
    const arr = [...filtered]; // copiar para no mutar

    if (sortOrder === "asc") {
      arr.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "des") {
      arr.sort((a, b) => b.price - a.price);
    }
    // si no es asc ni des, no ordena

    return arr;
  }, [filtered, sortOrder]);

  return (
    <>
      <section className="flex justify-center md:justify-end">
        <div className="mt-5 flex font-normal md:mt-0">
          <p>Ordenar por: </p>
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Relevancia</option>
            <option value="asc">Menor precio</option>
            <option value="des">Mayor precio</option>
          </select>
        </div>
      </section>
      <section className="mt-10 mb-20 flex items-center justify-center">
        <ul className="grid w-full grid-cols-1 place-items-center justify-around gap-10 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={handleAll}
            className={`cursor-pointer ${active === "all" && "text-red-500"}`}
          >
            Todos
          </li>

          {subCategories.map((product) => (
            <li
              className={`cursor-pointer ${active === product && "text-red-500"}`}
              onClick={() => handleCategory(product)}
              key={product}
            >
              {product}
            </li>
          ))}
        </ul>
      </section>
      <section className="my-5 flex items-center justify-center">
        <div className="mb-20 flex flex-wrap items-start justify-center gap-10 md:justify-between">
          {filteredAndSorted.map((product) => (
            <Card key={product.id} product={product} />
          ))}
          {filteredAndSorted.length === 0 && (
            <h1 className="text-center my-5 text-3xl font-bold italic">
              No hay productos que coincidan con esas caracteristicas.
            </h1>
          )}
        </div>
      </section>
    </>
  );
}
