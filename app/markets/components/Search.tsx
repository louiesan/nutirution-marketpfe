"use client";
import Form from "next/form";
import { FilterIcon, Search, X } from "lucide-react";
import Filtering from "./Filter";
import { useState } from "react";
import { searchparam } from "@/apptypes/types";

export default function Searcher({
  query,
  category,
  minprice,
  maxprice,
}: searchparam) {
  const [showFilter, setShowFilter] = useState<Boolean>(false);

  return (
    <Form
      action={"/markets"}
      className="w-full h-fit flex flex-row items-center justify-between gap-1 my-2.5 relative place-self-end"
    >
      <div className="w-fit h-fit relative">
        <button
          type="button"
          className="w-fit h-fit px-2 py-1 shadow-sm shadow-green-200  rounded-full outline-1 outline-green-300 text-green-400 cursor-pointer"
          onClick={() => setShowFilter((pre) => !pre)}
        >
          {showFilter ? <X /> : <FilterIcon />}
        </button>

        <Filtering
          showFilter={showFilter}
          category={category}
          minPrice={minprice}
          maxPrice={maxprice}
          setShowFilterAction={() => setShowFilter(false)}
        />
      </div>
      <div className="w-fit h-fit relative">
        <input
          type="text"
          name="query"
          minLength={1}
          defaultValue={query}
          className="w-xs pl-8 shadow-sm shadow-green-200 py-2 rounded-full outline-1 outline-green-300 text-green-200 font-medium text-lg"
          placeholder="E.g:Isolate"
        />
        <Search className={`absolute top-2.5 left-2`} />
        <button className="w-fit h-fit py-2 px-3 rounded-full bg-transparent text-white font-medium absolute right-0.5 top-0.5 outline outline-white cursor-pointer">
          Search
        </button>
      </div>
    </Form>
  );
}
