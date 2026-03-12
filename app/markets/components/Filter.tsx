"use client";

import type { Categories, Category } from "@/apptypes/types";
import categoriess from "@/data/market.json";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type props = {
  showFilter: Boolean;
  category: string | undefined;
  minPrice: string | undefined;
  maxPrice: string | undefined;
  setShowFilterAction: () => void;
};

export default function Filtering({
  showFilter,
  category,
  minPrice,
  maxPrice,
  setShowFilterAction,
}: props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const categories: Categories = categoriess.categories;
  const style = {
    opacity: showFilter ? "1" : "0",
    transform: showFilter ? "translateY(0px)" : "translateY(50px)",
  };

  function hundleFilters(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      style={style}
      className={`z-500 absolute top-full left-0 w-xs h-fit flex flex-col bg-black/30 drop-shadow-sm backdrop-blur-lg drop-shadow-indigo-300 rounded-md text-green-200 p-2.5 transition-all duration-500 ease-in`}
    >
      <label htmlFor="category" className="text-xl font-medium">
        Category:
      </label>
      <select
        className="outline-2 outline-green-200 rounded-md p-1 mt-1 cursor-pointer"
        name="category"
        id="category"
        defaultValue={category}
        onChange={(e) => hundleFilters("category", e.target.value)}
      >
        <option value="" className="text-black">
          {" "}
          All
        </option>
        {categories && categories.length > 0
          ? categories.map((e: Category) => (
              <option className="text-black" key={e.id} value={e.id}>
                {e.name}
              </option>
            ))
          : null}
      </select>

      <div className="relative w-full h-fit grid grid-cols-2 items-center gap-2.5 justify-center mt-2">
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-1">
          <label className="text-xl font-medium" htmlFor="maxPrice">
            Max Price:
          </label>
          <input
            className="w-full h-fit p-1 rounded-md outline-2 outline-green-300"
            type="number"
            name="maxprice"
            defaultValue={maxPrice}
            onChange={(e) => hundleFilters("maxprice", e.target.value)}
            min={0}
          />
        </div>
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-1">
          <label className="text-xl font-medium" htmlFor="minPrice">
            Min Price:
          </label>
          <input
            className="w-full h-fit p-1 rounded-md outline-2 outline-green-300"
            type="number"
            name="minprice"
            onChange={(e) => hundleFilters("minprice", e.target.value)}
            min={0}
            defaultValue={minPrice}
          />
        </div>
      </div>
    </div>
  );
}
