import { goal } from "@/apptypes/types";
import { CheckCircle, CheckCircle2, Goal, ShoppingCart } from "lucide-react";

export default function Plans({ goal }: { goal: goal }) {
  return (
    <div className="w-full h-full flex flex-col rounded-md bg-[#1bb1b] justify-between outline-1 outline-green-300 p-2.5">
      <h1 className="text-white font-semibold text-2xl text-left my-2.5">
        {goal.name}
      </h1>
      <ul>
        {goal.highlights.map((highlight, index) => (
          <li
            key={index}
            className="text-white flex flex-row flex-nowrap items-center justify-start gap-1 text-base"
          >
            <CheckCircle2 size={20} color="#41e441" fill="#black/40" />
            {highlight}
          </li>
        ))}
      </ul>
      <p className="my-2.5 text-sm font-normal text-white/90">
        {goal.description}
      </p>
      <span className="text-2xl font-semibold text-white my-2.5">
        {goal.price}$
      </span>
      <button className="w-full h-fit text-center text-xl font-medium text-black bg-green-400 rounded-md cursor-pointer flex flex-nowrap items-center justify-center gap-1 py-1.5 px-1">
        <Goal size={24} color="black" />
        View Plan
      </button>
    </div>
  );
}
