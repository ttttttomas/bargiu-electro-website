import type {Product} from "@/types";

import ProductsFiltered from "./ProductsFiltered";

export default function ProductsCategory({
  products,
  category,
}: {
  products: Product[];
  category: string;
}) {
  return (
    <main className="my-16 md:mx-30">
      <h1 className="text-center text-3xl font-bold italic">{category.toUpperCase()}</h1>

      {products.length > 0 && <ProductsFiltered products={products} />}
    </main>
  );
}
