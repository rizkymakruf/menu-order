import Image from "next/image";
import Foods from "../public/food.png";
import Drinks from "../public/dring.png";
import ListAll from "../components/list/listAll";
import { useMemo } from "react";

export default function Home() {
  return (
    <>
      <div className="w-full pt-3 pb-3 px-3 relative">
        <input
          className="border border-gray-400 rounded-full w-full py-1.5 px-2 focus:border-2 focus:border-red-300 focus:outline-none"
          placeholder="Search..."
        />
        <div className="absolute right-6 top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 pb-3 px-3">
        <div className="relative rounded-md h-20">
          <Image
            className="rounded-md brightness-75"
            src={Foods}
            layout={"fill"}
            objectFit={"cover"}
          />
          <p className="absolute text-white font-bold text-3xl left-9 top-5">
            FOODS
          </p>
        </div>
        <div className="relative rounded-md h-20">
          <Image
            className="rounded-md brightness-75"
            src={Drinks}
            layout={"fill"}
            objectFit={"cover"}
          />
          <p className="absolute text-white font-bold text-3xl left-8 top-5">
            DRINKS
          </p>
        </div>
      </div>

      {useMemo(() => {
        return <ListAll />;
      }, [])}

      <div className="absolute bottom-16 right-16 z-50 shadow-md">
        <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center fixed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="bg-white/80 w-4 h-4 absolute top-2 right-2 rounded-full text-red-500 text-[10px] items-center flex justify-center">
            8
          </div>
        </div>
      </div>
    </>
  );
}
