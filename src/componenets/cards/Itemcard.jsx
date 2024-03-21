/* eslint-disable react/prop-types */
// import Secondarybtn from "../buttons/Secondarybtn";
import Viewdetails from "../buttons/Viewdetails";
import Booknow from "../buttons/Booknow";
// import { useEffect, useState } from "react";

export default function Itemcard({ name, price, type, data }) {
  function titleCase(str) {
    if (str === undefined) {
      return "no data";
    }
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  return (
    <div className=" relative overflow-hidden max-md:w-full md:w-[30rem] h-[19rem] max-[350px]:h-[22rem] rounded-2xl bg-blue-secondary-light hover:scale-[1.02] hover:shadow-md hover:shadow-black transition-all duration-75 ease-in-out text-[1.5rem] max-[350px]:text-[1.2rem] flex flex-col justify-between px-[2rem] py-[3rem] gap-[1rem]">
      <h1 className="line-clamp-2 font-semibold">{titleCase(name)}</h1>
      <div className="w-full h-fit flex flex-col gap-[1rem]">
        <h1 className="">
          {type === "tbp" ? (
            <span className="flex items-center gap-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
              No preparation required
            </span>
          ) : (
            `₹${price}`
          )}
        </h1>
        <div className="flex gap-[2rem] max-[350px]:gap-[1rem] justify-start max-[350px]:flex-col max-[350px]:items-start">
          <Booknow testname={titleCase(name)} />
          {/* <button className="hover:cursor-pointer max-[350px]:text-center max-[350px]:w-full ">
            View Details
          </button> */}
          {type === "profile" ? (
            <Viewdetails headtext={titleCase(name)} data={data} />
          ) : (
            <></>
          )}
        </div>
      </div>
      {type === "profile" ? (
        <h1 className="absolute rotate-45 -right-[3.5rem] top-[1.5rem] px-[3rem] py-[0.5rem] text-[1.5rem] bg-gradient-to-l from-blue-primary-dark to-blue-primary-light text-white">
          Package
        </h1>
      ) : (
        <></>
      )}
    </div>
  );
}
