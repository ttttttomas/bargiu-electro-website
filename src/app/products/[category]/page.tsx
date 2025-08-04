import {openSans} from "@/app/layout";
import Card from "@/components/ui/Card";

export default function ProductCategoryPage({params}: {params: {category: string}}) {
  const {category} = params;

  console.log(category);

  return (
    <main className={`my-16 md:mx-30 ${openSans.className}`}>
      <h1 className="text-center text-3xl font-bold italic">{category.toUpperCase()}</h1>
      <section className="flex justify-center md:justify-end">
        <div className="mt-5 flex font-normal md:mt-0">
          <p>Ordenar por: </p>
          <select>
            <option value="">Más barato</option>
          </select>
        </div>
      </section>
      <section className="mt-10 mb-20 flex items-center justify-center">
        <ul className="grid w-full grid-cols-1 place-items-center justify-around gap-10 md:grid-cols-2 xl:grid-cols-3">
          <li>Subcategoria 1</li>
          <li>Subcategoria 2</li>
          <li>Subcategoria 3</li>
          <li>Subcategoria 4</li>
          <li>Subcategoria 5</li>
          <li>Subcategoria 6</li>
        </ul>
      </section>
      <section className="my-5 flex items-center justify-center">
        <div className="mb-20 flex flex-wrap items-center justify-center gap-10 md:justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
