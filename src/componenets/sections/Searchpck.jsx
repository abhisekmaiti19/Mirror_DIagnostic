import lines from "../../assets/lines.png";
export default function Searchcontent() {
  return (
    <div className="relative w-full md:h-[10rem] min-[475px]:h-[10rem] max-[475px]:h-[8rem] bg-gradient-to-r from-blue-secondary-light to to-blue-secondary-dark rounded-3xl max-[475px]:rounded-lg flex justify-center items-center">
      <div className="flex flex-col md:gap-[3rem] min-[475px]:gap-[2rem] max-[475px]:gap-[1rem]">
        <div className="lg:w-[60rem] max-lg:w-full h-[4.5rem] min-[475px]:h-[4rem] max-[475px]:h-[3rem] flex items-center">
          <input
            type="text"
            placeholder={"Search for Lab tests, scan, health checkup"}
            className="w-full h-full text-[1.5rem] px-[4rem] rounded-l-xl outline-none text-black text-gray-400 max-[475px]:px-[2rem] max-[475px]:text-[1.2rem]"
          />
          <button className="w-[4.5rem] h-full bg-blue-primary-dark flex justify-center items-center rounded-r-xl text-white">
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
        </div>
      </div>
    </div>
  );
}
