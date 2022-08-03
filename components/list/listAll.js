import { memo } from "react";
import Image from "next/dist/client/image";
import F1 from "../../public/f1.jpg";
import F2 from "../../public/f2.jpg";
import F3 from "../../public/f3.jpg";
import F4 from "../../public/f4.jpg";
import F5 from "../../public/f5.jpg";
import F6 from "../../public/f6.jpg";
import F7 from "../../public/f7.jpg";
import F8 from "../../public/f8.jpg";

const ListAll = () => {
  const data = [
    {
      name: "Tahu pedes",
      img: F1,
      price: "Rp 10.000",
    },
    {
      name: "Tahu pedes",
      img: F2,
      price: "Rp 5.000",
    },
    {
      name: "Tahu pedes",
      img: F3,
      price: "Rp 10.000",
    },
    {
      name: "Tahu pedes",
      img: F4,
      price: "Rp 5.000",
    },
    {
      name: "Tahu pedes",
      img: F5,
      price: "Rp 5.000",
    },
    {
      name: "Tahu pedes",
      img: F6,
      price: "Rp 5.000",
    },
    {
      name: "Tahu pedes",
      img: F7,
      price: "Rp 5.000",
    },
    {
      name: "Tahu pedes",
      img: F8,
      price: "Rp 5.000",
    },
  ];
  return (
    <>
      <div className="w-full px-3 font-semibold text-red-500 flex items-center">
        <p className="pb-1">All Menu</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="w-full px-3 pb-3 gap-3 grid grid-cols-2">
        {data.map((a, id) => {
          return (
            <div className="rounded-md border border-gray-200 p-1 shadow-sm">
              <div className="relative h-36">
                <Image
                  src={a.img}
                  layout={"fill"}
                  objectFit={"cover"}
                  className={"rounded-md"}
                />
              </div>
              <div className="w-full pt-1">
                <p className="text-md font-bold text-gray-800">{a.name}</p>
              </div>
              <div className="w-full flex justify-between px-1 items-center">
                <p className="text-md font-bold text-gray800">{a.price}</p>
                <button className="w-8 my-1 bg-red-500 h-8 rounded-lg">
                  <p className="text-sm text-white font-semibold gap-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default memo(ListAll);
