/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import Booknow from "../buttons/Booknow";

/* eslint-disable react/prop-types */
export default function Pricing({ pckname, price, data }) {
  return (
    <div className="w-[30rem] shadow-2xl text-[2rem] font-bold p-[2rem] rounded-xl flex flex-col justify-between">
      <div>
        <h1 className="text-blue-primary-dark">{pckname}</h1>
        <ul className="text-[1.5rem] font-semibold mt-[2rem] text-black/80">
          {data.map((item) => {
            let id = nanoid();
            return (
              <li className="flex gap-[1rem] items-center mt-[1rem]" key={id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <Booknow type={"pckg"} price={price} testname={pckname} />
    </div>
  );
}
