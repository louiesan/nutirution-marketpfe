import { product, products, searchparam } from "@/apptypes/types";
import Searcher from "./components/Search";
import { filterProducts } from "@/lib/fun";
import GridCards from "./components/GridCards";

export default async function Markets({
  searchParams,
}: {
  searchParams: Promise<searchparam>;
}) {
  const res = await fetch("http://localhost:4000/products");
  const products: products = await res.json();
  const { query, category, minprice, maxprice } = await searchParams;

  const filtredProduct = filterProducts(
    products,
    query,
    category,
    minprice,
    maxprice,
  );
  const condition = products.every((e) => filtredProduct.includes(e));
  console.log(condition);

  return (
    <main className="mt-18.25 text-white w-full h-full max-w-6xl mx-auto p-2.5">
      <h1 className={`text-white text-2xl font-medium`}>
        Discover Our Markets:
      </h1>

      <Searcher
        maxprice={maxprice}
        minprice={minprice}
        category={category}
        query={query}
      />
      {query && query.length > 0 ? <h4>Search: {query}</h4> : null}
      <GridCards products={condition ? products : filtredProduct} />
    </main>
  );
}
