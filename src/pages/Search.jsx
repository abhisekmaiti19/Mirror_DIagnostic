import { NavLink } from "react-router-dom";
import searchContext from "../context/searchContext/searchContext";
import Searchcontent from "../componenets/sections/Searchcontent";
import Itemcard from "../componenets/cards/Itemcard";
import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { nanoid } from "nanoid";

export default function Search() {
  const { searchdata, searchfordata } = useContext(searchContext);
  console.log(searchdata);
  return (
    <div className="relative w-full h-full mt-[108px]">
      <NavLink
        to="/"
        className="flex gap-[2rem] w-fit text-[2rem] mb-[3rem] items-center text-blue-primary-dark hover:-translate-x-10 transition-all duration-200 ease-linear hover:text-blue-primary-light"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[3rem] h-[3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <h1>Back to Home</h1>
      </NavLink>

      <Searchcontent />
      <h1 className="my-[3rem] text-[2rem]">
        {searchdata.length === 0
          ? `no result found for --- "${searchfordata}"`
          : ` Search results for " ${searchfordata} "`}
      </h1>
      <div className="w-full flex flex-wrap gap-[2rem] my-[3rem]">
        {searchdata.length > 0 ? (
          searchdata.map((item) => {
            let id = nanoid();
            return (
              <Itemcard
                key={id}
                name={item.name}
                price={item.price}
                type={"cmn"}
                data={item.tests}
              />
            );
          })
        ) : (
          <div className="w-full flex justify-center my-[3rem]">
            <Player
              src="https://lottie.host/383a8b74-838a-4315-bfa9-6b3bdeb2e92a/tRYBXAx25u.json"
              className="w-fit h-[100px] xl:h-[160px]"
              speed="1"
              direction="1"
              mode="normal"
              loop
              autoplay
            />
          </div>
        )}
      </div>
    </div>
  );
}
