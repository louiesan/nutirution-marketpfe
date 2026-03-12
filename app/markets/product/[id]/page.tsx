import { NutritionFacts, ProductById, products } from "@/apptypes/types";
import JsonDumm from "@/data/market.json";
import Image from "next/image";
import isolate from "@/public/isolate.webp";
import Link from "next/link";
import { CheckCircle2, Star, StarHalf } from "lucide-react";
import Plans from "@/app/components/Plans";
import type { item } from "@/apptypes/types";
import { AddToCartButton } from "../component/AddToCartButton";

export default async function productPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/product`);
  const products: ProductById[] = await res.json();
  const product: ProductById = products.find((e) => e.id === id)!;

  const item: item = {
    id: Number(product.id),
    name: product.name,
    price: product.price,
    image: product.images[0],
    quantity: 1,
  };

  const nutKeys = Object.keys(product.nutritionFacts).map((key) => {
    const typedKey = key as keyof NutritionFacts;
    return typedKey;
  });
  const goals = JsonDumm.goals.filter((e) =>
    e.productIds.includes(Number(product.id)),
  );
  return (
    <main className="mt-18.25 grid grid-cols-1 md:grid-cols-2 text-white max-w-5xl mx-auto">
      <div className="w-full h-fit flex flex-nowrap gap-1 rounded-md p-2.5">
        <div className="w-fit h-full p-2 flex flex-col gap-2.5">
          {product.images.map((e, i) => (
            <Image
              key={i}
              src={isolate}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-md p-1 border-white border cursor-pointer"
            />
          ))}
        </div>
        <Image
          src={isolate}
          alt={`${product.name}png`}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col w-full h-full p-2.5">
        <ul className="w-full h-fit flex flex-row items-center justify-start gap-0.5 text-gray-500">
          <li>
            <Link href={"/"}>NutirutioN.com</Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link href={"/markets"}>Markets</Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link
              className="text-white"
              href={`/markets/product/${product.id}`}
            >
              {product.name}
            </Link>
          </li>
        </ul>
        <div className="mt-2.5">
          <h1 className="text-4xl text-white font-semibold ">{product.name}</h1>
          <div className="w-full h-fit flex flex-wrap gap-5 justify-start">
            <p className="text-white text-base font-normal">
              Brand: {product.brand}
            </p>
            <div className="flex flex-row flex-nowrap gap-0.5 items-center">
              <p className="text-white text-base font-normal ">
                Reviews: {product.rating}
              </p>
              <div className="w-fit h-full flex flex-wrap items-center justify-start gap-0.5 pt-1">
                {" "}
                {product.rating % 1 === 0 ? (
                  [...Array(product.rating)].map((_, i) => (
                    <Star size={15} color="yellow" fill={`yellow`} key={i} />
                  ))
                ) : (
                  <>
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <Star size={15} color="yellow" fill={`yellow`} key={i} />
                    ))}
                    <StarHalf size={15} color="yellow" fill={`yellow`} />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-wrap items-center justify-start gap-2.5 mt-1">
            {product.category ? (
              <p
                title="category"
                className="text-black bg-white/80 rounded-full px-2.5 py-1"
              >
                {product.category}
              </p>
            ) : null}
            {product.subCategory ? (
              <p
                title="sub-category"
                className="text-black bg-white/80 rounded-full px-2.5 py-1 border border-[#6699ff]"
              >
                {product.subCategory}
              </p>
            ) : null}
          </div>
          <span className="block text-white/80 font-normal text-lg mb-2">
            {product.shortDescription}
          </span>
          <span
            className={`font-medium w-fit my-1 rounded-md p-1 text-white ${product.stock ? "bg-green-400 drop-shadow-lg drop-shadow-green-200/30" : "bg-red-400 drop-shadow-lg drop-shadow-red-200/30 "}`}
          >
            {product.stock ? "Available" : "Sold-out"}
          </span>
          <span className="block text-white font-medium text-4xl my-2">
            {product.price}$
          </span>
          {product.reviewsCount && (
            <span className="text-gray-200 font-normal italic">
              {Math.floor((product.rating * product.reviewsCount) / 5)} of{" "}
              {product.reviewsCount} Reviews Satisfied{" "}
            </span>
          )}
          <AddToCartButton item={item} />
        </div>
      </div>
      <div className="w-full h-fit">
        <h2 className="text-2xl text-white font-semibold">Description:</h2>
        <h3 className="text-white text-2xl font-normal my-2.5">Highlights:</h3>
        <ul className="mb-2.5">
          {product.highlights.map((e, i) => (
            <li
              key={i}
              className="w-full h-fit uppercase text-xl font-normal flex flex-row items-center justify-start gap-2"
            >
              <CheckCircle2 color="black" fill="orange" size={20} /> {e}
            </li>
          ))}
        </ul>
        {product.ingredients && product.ingredients.length > 0 ? (
          <>
            <p>
              Try <span className="font-bold">{product.name}</span>, made with
              natural ingredients and no artificial additives:
            </p>
            <ul className="w-full h-fit flex flex-col gap-1.5 my-2.5">
              {product.ingredients.map((e, i) => (
                <li
                  key={i}
                  className="w-full h-fit uppercase font-semibold text-lg text-gray-500 gap-2"
                >
                  {e}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <h3 className="text-white font-bold text-xl mb-2.5 uppercase">
          Why {product.name} ?
        </h3>
        <h4 className="text-white font-medium mb-1.5 pl-1">
          {product.longDescription.intro}
        </h4>
        {product.longDescription.sections &&
        product.longDescription.sections.length > 0
          ? product.longDescription.sections.map((e, i) => (
              <div key={i} className="w-full h-fit my-2.5">
                <h5 className="text-white/80 text-lg font-semibold uppercase">
                  {e.title}
                </h5>
                <p className="text-white/80 font-normal pl-2">{e.content}</p>
              </div>
            ))
          : null}
        <span className="uppercase italic font-semibold text-white/80">
          {product.longDescription.conclusion}
        </span>
      </div>
      <div className="w-full h-fit p-2.5">
        <h1 className="text-white font-bold text-2xl mb-2.5">
          Nutritional Facts:
        </h1>
        <table>
          <tbody>
            <tr className="border-b border-b-gray-400">
              <th className="p-2.5 text-left">Nutritional Value</th>
              <th className="p-2.5">100 grams</th>
              <th className="p-2.5">30g (serving)</th>
            </tr>
            {nutKeys.map((e: keyof NutritionFacts, i) => (
              <tr key={i} className="border-b border-b-gray-400">
                <td className="p-2.5">{e.toLocaleUpperCase()}</td>
                <td className="p-2.5">{product.nutritionFacts[`${e}`]}</td>
                <td className="p-2.5">{product.nutritionFacts[`${e}`]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full h-fit md:col-span-2 border-t-2 border-white mt-2.5">
        <h2 className="text-white text-2xl font-semibold my-2.5">
          Recommended Goals:
        </h2>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {goals.map((e) => (
            <Plans key={e.id} goal={e} />
          ))}
        </div>
      </div>
    </main>
  );
}
