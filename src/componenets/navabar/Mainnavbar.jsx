import { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full h-[8rem] lg:px-[16rem] max-lg:px-[4rem] py-[2rem] flex justify-center items-center bg-gray-light fixed top-0 right-0 z-[9999]">
      <div className="max-w-screen-xxl w-full flex justify-between items-center relative">
        <NavLink to="">
          {" "}
          <img src={logo} className="w-[15rem]" alt="" />{" "}
        </NavLink>
        <div
          className={`flex gap-[4rem] text-[1.8rem] text-blue-primary-dark font-normal [@media(min-width:1150px)]:flex [@media(max-width:1150px)]:absolute ${
            nav
              ? `[@media(max-width:1150px)]:flex-col [@media(max-width:1150px)]:top-[4rem] [@media(max-width:1150px)]:bg-gray-light [@media(max-width:1150px)]:p-[2rem] [@media(max-width:1150px)]:rounded-2xl [@media(max-width:1150px)]:right-0`
              : `hidden`
          }`}
        >
          <NavLink
            to=""
            className={({ isActive }) =>
              `${isActive ? `font-bold` : `font-normal`}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="packages"
            id="packages"
            className={({ isActive }) =>
              `${isActive ? `font-bold` : `font-normal`}`
            }
          >
            Packages
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${isActive ? `font-bold` : `font-normal`}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${isActive ? `font-bold` : `font-normal`}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="flex gap-[1rem] items-center text-[1.8rem] font-regular text-blue-primary-dark [@media(min-width:1150px)]:flex [@media(max-width:1150px)]:hidden">
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <h1 className="flex flex-col justify-start items-start text-[14px]">
            <span className="font-bold text-[18px]">+91-9647775335</span>
            Call us to book now
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[3rem] h-[3rem] [@media(min-width:1150px)]:hidden"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {/* min-[1150px]:hidden */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
