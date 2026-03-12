import { goal } from "@/apptypes/types";
import plans from "@/data/market.json";
import Plans from "../components/Plans";
import OnScroll from "../components/OnScroll";

export default function GoalsPage() {
  const goals: goal[] = plans.goals;
  const highlights: string[] = [
    "Action & Results Focused",
    "Emotional & Confidence Focused",
    "Short & Punchy",
    "Easy to Understand & Follow",
    "Science-Based & Effective",
  ];
  return (
    <main className="flex-1 w-full h-full max-w-6xl mx-auto">
      <OnScroll>
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-1 drop-shadow-xs drop-shadow-green-200 p-2.5">
          <h1 className=" text-white text-3xl sm:text-5xl font-semibold text-center my-1.5">
            Choose Your Fitness Goal.
          </h1>
          <h1 className="text-green-400 text-center text-3xl sm:text-5xl font-semibold">
            We’ll Build The Stack.
          </h1>
          <p className="text-center text-white/90 text-base sm:text-xl mt-2.5">
            Whether you want to bulk, cut, gain strength, or improve endurance —
            we’ve created scientifically structured supplement stacks to help
            you get there faster.
          </p>
          <div className="w-full h-fit flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 my-2.5">
            <a
              href="#goals"
              className="w-fit h-fit font-medium uppercase text-black bg-white rounded-full px-3 py-2 cursor-pointer"
            >
              🔥 Explore Goals
            </a>
            <button className="w-fit h-fit font-medium uppercase text-black bg-green-300 rounded-full px-3 py-2 cursor-pointer">
              🚀 Start My Transformation
            </button>
          </div>
        </div>
      </OnScroll>
      <div className="w-full h-full p-2.5">
        <OnScroll>
          <h1 className="text-3xl font-medium text-center text-white mb-2.5">
            How Our Goal Plans Work
          </h1>
        </OnScroll>
        <OnScroll>
          <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-violet-200 backdrop-blur-lg">
              <h2 className="text-lg font-bold text-white flex flex-row flex-nowrap items-center gap-1">
                Select your goal
              </h2>
            </div>
            <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-violet-200 backdrop-blur-lg">
              <h2 className="text-lg font-bold text-white flex flex-row flex-nowrap items-center gap-1">
                Get a curated supplement stack
              </h2>
            </div>
            <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-violet-200 backdrop-blur-lg">
              <h2 className="text-lg font-bold text-white flex flex-row flex-nowrap items-center gap-1">
                Follow consistently & track progress
              </h2>
            </div>
          </div>
        </OnScroll>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 my-2.5 gap-2.5">
          <OnScroll>
            <div className="w-full h-full p-1.5 md:p-2.5  bg-white/10 rounded-md">
              <h1 className="text-2xl md:text-3xl font-medium text-center md:text-left text-white my-2.5">
                Why Goal-Based Plans?
              </h1>
              <p className="mt-1.5 text-white/90 font-normal text-base md:text-lg whitespace-pre-wrap pl-1">
                Instead of falling for flashy marketing or randomly buying
                supplements that end up collecting dust, our goal-based plans
                eliminate confusion, guesswork, and wasted money. By aligning
                your stack with your specific training intensity, recovery
                needs, and nutritional gaps, you finally get that feeling of
                certainty that you’re doing the right thing for your body.
              </p>
            </div>
          </OnScroll>
          <OnScroll>
            <div className="w-full h-full p-1.5 md:p-2.5  bg-white/10 rounded-md">
              <h1 className="text-2xl md:text-3xl font-medium text-center md:text-left text-white my-2.5">
                Our Highlighted Benefits
              </h1>
              <ul className="mt-1.5 text-white/90 font-normal text-sm md:text-base whitespace-pre-wrap pl-1">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-lg">
                    <span className="text-green-400">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </OnScroll>
        </div>
        <div id="goals" className="w-full h-fit scroll-mt-18.25">
          <OnScroll>
            <h1 className="text-2xl md:text-3xl font-medium text-center text-white my-2.5">
              Available Goals:
            </h1>
          </OnScroll>
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {goals.map((e) => (
              <OnScroll key={e.id}>
                <Plans goal={e} />
              </OnScroll>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
