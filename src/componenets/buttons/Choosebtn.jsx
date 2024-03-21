/* eslint-disable react/prop-types */
import lab from "../../assets/lab.png";
import heart from "../../assets/heart.png";
import xray from "../../assets/xray.png";
import emoji from "../../assets/emoji.png";

export default function Choosebutton({ text }) {
  let button = [
    {
      datatext: "Book Lab Tests",
      img: (
        <img
          src={lab}
          className="w-[5rem] h-[5rem] md:flex max-md:hidden"
          alt=""
        />
      ),
    },
    {
      datatext: "Popular Health Checks",
      img: (
        <img
          src={heart}
          className="w-[5rem] h-[5rem] md:flex max-md:hidden"
          alt=""
        />
      ),
    },
    {
      datatext: "X-Rays & Scans & MRI",
      img: (
        <img
          src={xray}
          className="w-[5rem] h-[5rem] md:flex max-md:hidden"
          alt=""
        />
      ),
    },
    {
      datatext: "Full Body Checkups",
      img: (
        <img
          src={emoji}
          className="w-[5rem] h-[5rem] md:flex max-md:hidden"
          alt=""
        />
      ),
    },
  ];

  return (
    <button
      className={`w-fit md:px-[2rem] min-[280px]:px-[1rem] min-[280px]:py-[0.5rem] md:py-[2rem] flex min-[280px]:gap-[0.5rem] md:gap-[2rem] items-center text-start bg-blue-secondary-dark max-md:rounded-lg md:rounded-3xl font-bold text-blue-primary-dark md:mt-[2rem]`}
    >
      {button.map((item) => {
        if (item.datatext === text) {
          return item.img;
        }
      })}
      <h1 className="w-[12rem] md:text-[1.5rem] max-md:text-[1.2rem] leading-tight">
        {text}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[3.2rem] h-[3.2rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
}
