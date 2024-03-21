import lines from "../../assets/lines.png";
import hero from "../../assets/heroim.png";
import herohrt from "../../assets/herohrt.png";
import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import searchContext from "../../context/searchContext/searchContext";
import toast from "react-hot-toast";

// all data in my utils
// import packagedata from "../../utils/packages.json";
// import profilesdata from "../../utils/profiles.json";
import testdata from "../../utils/testdata.json";

export default function Searchcontent() {
  const [searchvalues, setSearchvalues] = useState("");
  const location = useLocation();
  // const { hash, pathname, search } = location;
  const { pathname } = location;

  //handelling context api for search results
  const { setSearchdata, setSearchfordata } = useContext(searchContext);

  //function for filtering data
  function filterdata(srch) {
    let arr = [];
    srch = srch.toUpperCase();
    // packagedata.data.map((item) => {
    //   if (item.name.includes(srch)) {
    //     arr.push(item);
    //   }
    // });
    // profilesdata.data.map((item) => {
    //   if (item.name.includes(srch)) {
    //     arr.push(item);
    //   }
    // });
    srch.split(" ").map((it) => {
      testdata.data.map((item) => {
        if (item.name.search(it) !== -1) {
          arr.push(item);
        }
      });
    });

    setSearchfordata(searchvalues);

    return arr;
  }

  return (
    <div className="relative w-full md:h-[22rem] min-[475px]:h-[15rem] max-[475px]:h-[10rem] bg-gradient-to-r from-blue-secondary-light to to-blue-secondary-dark rounded-3xl max-[475px]:rounded-lg flex justify-center items-center">
      <div className="flex flex-col md:gap-[3rem] min-[475px]:gap-[2rem] max-[475px]:gap-[1rem]">
        <h1 className="w-fit text-blue-primary-dark font-bold text-[3rem] max-md:text-[2rem] relative max-[475px]:text-[1.5rem]">
          Search Checkups, Test and Scan
          <img
            src={lines}
            className="absolute -right-10 -top-5 max-md:hidden"
            alt=""
          />
        </h1>
        <div className="lg:w-[60rem] max-lg:w-full h-[4.5rem] min-[475px]:h-[4rem] max-[475px]:h-[3rem] flex items-center">
          <input
            type="text"
            value={searchvalues}
            onChange={(e) => {
              setSearchvalues(e.target.value);
            }}
            placeholder={"Search for Lab tests, scan, health checkup"}
            className="w-full h-full text-[1.5rem] px-[4rem] rounded-l-xl border-none inp  text-black max-[475px]:px-[2rem] max-[475px]:text-[1.2rem]"
          />
          {pathname === "/search-results" ? (
            <button
              className="w-[4.5rem] h-full bg-blue-primary-dark flex justify-center items-center rounded-r-xl text-white"
              onClick={() => {
                searchvalues.trim() === ""
                  ? toast.error(`Please enter text to search`, {
                      className: "text-[2rem]",
                      position: "bottom-center",
                    })
                  : setSearchdata(filterdata(searchvalues));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[2.5rem] h-[2.5rem] rounded-l-xl  max-[475px]:h-[1.5rem] max-[475px]:w-[1.5rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          ) : (
            <NavLink
              to={searchvalues.trim() !== "" ? "/search-results" : ""}
              className="w-[4.5rem] h-full bg-blue-primary-dark flex justify-center items-center rounded-r-xl text-white"
              onClick={() => {
                searchvalues.trim() === ""
                  ? toast.error(`Please eneter text to search`, {
                      className: "text-[2rem]",
                      position: "bottom-center",
                    })
                  : setSearchdata(filterdata(searchvalues));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[2.5rem] h-[2.5rem] rounded-l-xl  max-[475px]:h-[1.5rem] max-[475px]:w-[1.5rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </NavLink>
          )}
        </div>
      </div>
      <img
        src={hero}
        className="absolute bottom-0 xxl:left-[15%] xl:left-[8%] lg:left-[2%] max-lg:hidden"
        alt=""
      />
      <img
        src={herohrt}
        className="absolute xxl:right-[15%] xl:right-[8%] lg:right-[4%] max-lg:hidden"
        alt=""
      />
    </div>
  );
}
