"use client";
import type { Categories, Category, item, product } from "@/apptypes/types";
import TempoPic from "@/public/heroPack.webp";
import categories from "@/data/market.json";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { addToCart } from "@/redux/appstore/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/appstore/storeHooks/storeHooks";

export default function Cards({ product }: { product: product }) {
  const categoriess: Categories = categories.categories;
  const category: Category = categoriess.find(
    (e) => e.id === product.category_id,
  )!;
  //setting item for addToCart function
  const item: item = {
    id: Number(product.id),
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };
  const dispatch = useAppDispatch();

  return (
    <div className="bg-[#000013] w-full h-full rounded-md gap-1 p-1.5 drop-shadow-sm drop-shadow-[#a6f8fe] flex flex-col ">
      <Image
        src={TempoPic}
        alt="productpng"
        quality={90}
        placeholder="blur"
        className="rounded-md aspect-square w-full h-fit max-w-xs"
      />
      <div className="w-full h-full grid grid-cols-1 my-0.5 justify-start gap-1">
        <div className="w-full h-fit flex flex-nowrap items-center justify-between gap-2">
          <span className="font-bold text-green-300 drop-shadow-green-200 drop-shadow-xs uppercase">
            {category.name}
          </span>{" "}
          <span className="underline italic text-white drop-shadow-sm drop-shadow-white/40">
            stock:{product.stock}
          </span>
        </div>
        <div className="w-full h-fit mb-2">
          <Link href={`/markets/product/${product.id}`}>
            <h1
              title={product.name}
              className="text-xl font-medium text-white uppercase"
            >
              {product.name.length > 15
                ? product.name.slice(0, 18) + "..."
                : product.name}
            </h1>
          </Link>
          <p className="text-sm font-normal text-white/80 mb-2">
            {product.description}
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-between ">
          <span className="text-xl font-medium text-white">
            {product.price}$
          </span>
          <button
            onClick={() => dispatch(addToCart({ item: item }))}
            className="w-fit h-fit px-2 py-1.5 rounded-sm bg-white text-black"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
