import {Product} from "@/types";

import ProductsCategory from "@/components/ProductsCategory";
import productService from "@/app/services/productServices";

export default async function ProductCategoryPage({params}: {params: {category: string}}) {
  const {category} = params;
  const products: Product[] = await productService.getByCategory(category);

  if (products.length === 0) {
    return (
      <main className="mb-5 flex h-[50vh] flex-col items-center justify-end gap-50">
        <h1 className="text-center text-3xl font-bold italic">
          No se encontraron productos con esa categoría.
        </h1>
        <p className="underline">Intenta con estas categorias:</p>
      </main>
    );
  }

  return <ProductsCategory category={category} products={products} />;
}
