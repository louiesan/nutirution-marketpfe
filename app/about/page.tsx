import AboutImage from "@/public/aboutheropage.webp";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ScrollCircle, ScrollLine, ShowCards } from "../components/AboutPrgrs";
import OnScroll from "../components/OnScroll";
import { AboutForm } from "./component/AboutForm";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function About() {
  return (
    <main
      className={`mt-18.25 max-w-6xl mx-auto px-2.5 ${montserrat.className} ${montserrat.style} z-1 text-white w-full h-full flex flex-col `}
    >
      <OnScroll>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 my-1.5 gap-2.5 items-center justify-center mb-10">
          <div className="w-full h-fit">
            <h1 className="text-white text-2xl text-center md:text-left md:text-3xl lg:text-4xl uppercase font-semibold mb-5">
              Built For Athletes. Designed For Results.
            </h1>
            <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium">
              NutritioN was created to simplify supplement choices and eliminate
              confusion. We provide goal-oriented stacks, lab-tested products,
              and transparent information so you can focus on training — not
              guessing.
            </p>
          </div>
          <div className="w-full h-fit">
            <Image
              className="w-full outline-2 outline-green-500/80 rounded-md drop-shadow-lg drop-shadow-green-600/89"
              src={AboutImage}
              alt="aboutheroimg"
            />
          </div>
        </div>
      </OnScroll>
      <ShowCards>
        <div className="w-full h-screen max-h-screen place-content-center content-center my-10 drop-shadow-sm drop-shadow-white/90">
          <h1 className="text-4xl md:text-6xl font-bold text-white col-span-3 my-2.5 text-center ">
            OUR STORY
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias
            numquam autem cupiditate. Eum, fuga officia beatae in exercitationem
            nesciunt provident, laudantium nam veniam dignissimos inventore
            tenetur quam, velit quaerat!
          </p>
        </div>
      </ShowCards>
      <div className="block">
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0">
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Research:
              </h2>
              <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-yellow-600/80 italic font-medium px-1.5 text-center py-2 rounded-xl bg-green-300/80 drop-shadow-xs drop-shadow-green-200 my-2">
                SUPER CLEAN WORK
              </span>
            </div>
          </ShowCards>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <div></div>
        </div>
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0 ">
          <div></div>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Product Selection:
              </h2>
              <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-emerald-600 italic font-medium px-1.5 text-center py-2 rounded-xl bg-indigo-300/80 drop-shadow-xs drop-shadow-green-200 my-2">
                GOOD VISION
              </span>
            </div>
          </ShowCards>
        </div>
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0 ">
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Stack Building:
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-medium my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-gray-900 italic font-medium px-1.5 text-center py-2 rounded-xl bg-gray-300/40 drop-shadow-xs drop-shadow-green-200 my-2">
                STACK BUILDING
              </span>
            </div>
          </ShowCards>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full h-fit my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 drop-shadow-sm drop-shadow-white/20">
        <h1 className="text-4xl font-semibold text-white my-5 uppercase text-center sm:col-span-2 md:col-span-3">
          Our Approach:
        </h1>
        <div className="w-full h-45 flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-md bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300 ">
          <h1 className="text-2xl md:text-xl lg:text-2xl my-2.5 font-semibold text-white uppercase text-center">
            🧧 50+ Products
          </h1>
          <p className="text-sm my-1 text-white/80 font-medium text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vero
            aliquam tempore ducimus perferendis.
          </p>
        </div>
        <div className="w-full h-45 flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-md bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300 ">
          <h1 className="text-2xl md:text-xl lg:text-2xl my-2.5 font-semibold text-white uppercase text-center">
            🎯 5 Goal Programs
          </h1>
          <p className="text-sm my-1 text-white/80 font-medium text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vero
            aliquam tempore ducimus perferendis.
          </p>
        </div>
        <div className="w-full h-45 flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-md bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300 ">
          <h1 className="text-2xl md:text-xl lg:text-2xl my-2.5 font-semibold text-white uppercase text-center">
            🧑🏽‍💼 1000+ Satisfied
          </h1>
          <p className="text-sm my-1 text-white/80 font-medium text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vero
            aliquam tempore ducimus perferendis.
          </p>
        </div>
      </div>
      <OnScroll>
        <h2 className="text-white uppercase font-semibold text-center text-6xl mt-16">
          CONTACT US
        </h2>
      </OnScroll>
      <OnScroll>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-20">
          <div className="w-full h-full">
            <AboutForm />
          </div>
          <div className="w-full h-full flex flex-col p-2.5 justify-evenly">
            <div>
              <h2 className="text-white uppercase font-semibold text-4xl mb-2.5">
                Anything in mind?
              </h2>
              <p className="text-white/80 font-medium text-xl p-1.5">
                Have anything in mind don't ever hesitate to contact Us, We will
                respond at you at maximum.
              </p>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-2.5">
              <span className="text-green-200/80 drop-shadow-green-100 drop-shadow-xs text-lg font-normal">
                you can also become a newsettler:
              </span>
              <form className="w-full h-fit flex flex-row items-center relative">
                <input
                  type="text"
                  placeholder="blingadonag@example.com"
                  className="w-full h-fit px-2.5 py-1.5 rounded-xs bg-white text-black/80 text-normal"
                />
                <button className="absolute top-1/2 -translate-y-1/2 right-0 w-fit h-fit px-1.5 py-1 rounded-xs outline outline-white/80 text-white bg-black cursor-pointer">
                  registre
                </button>
              </form>
            </div>
          </div>
        </div>
      </OnScroll>
    </main>
  );
}
