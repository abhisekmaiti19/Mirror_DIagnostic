// import footer from "../../assets/footer.png";
import { NavLink } from "react-router-dom";
import novo from "../../assets/novo.png";
import Inquery from "../sections/Inquery";

export default function Mainfooter() {
  return (
    <div className="w-full relative mt-[8rem] bg-gradient-to-l from-blue-primary-dark to-blue-primary-light flex flex-col gap-[8rem] justify-end items-center">
      <div className="w-full bg-white hidden">
        <div className=" translate-y-24 ">
          <Inquery />
        </div>
      </div>
      <div className="w-full flex max-w-screen-xxl max-md:flex-col justify-between gap-[4rem]  pt-[8rem] px-[8rem]">
        <div className="w-[32rem] max-[450px]:w-full text-[1.5rem] leading-tight text-white  flex flex-col gap-[4rem] items-start">
          <img src={novo} className=" opacity-50" alt="" />
          <p>
            Welcome to Mirror Diagnostics, your trusted partner in healthcare
            located in Kota. We are proud to be ISO certified, ensuring that our
            services meet the highest standards of quality and reliability.
          </p>
        </div>
        <div className="flex gap-[8rem] max-[550px]:flex-col text-[1.5rem] text-white/80">
          <div className="flex flex-col gap-[4rem]">
            <h1 className="text-[2rem] font-semibold text-blue-secondary-dark">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-[1rem]">
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="about">About Us</NavLink>
              </li>
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="contact">Contact Us</NavLink>
              </li>
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="privacy">Privacy Policy</NavLink>
              </li>

              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="terms-conditions">Terms and Conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[4rem]">
            <h1 className="text-[2rem] font-semibold text-blue-secondary-dark">
              Useful Links
            </h1>
            <ul className="flex flex-col gap-[1rem]">
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="packages">Health Packages</NavLink>
              </li>
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="">Test Menu</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[4rem] w-[15rem]">
            <h1 className="text-[2rem] font-semibold text-blue-secondary-dark">
              Contact Us
            </h1>
            <ul className="flex flex-col gap-[1rem]">
              <li>Hire me : {") ->"} visit abhisekmaiti.dev</li>
              <li>+9647775335</li>
            </ul>
          </div>
        </div>
      </div>
      {/* bellow bar  */}
      <div className="w-full h-fit py-[2rem] px-[8rem] max-[570px]:px-[2rem] gap-[5rem] bg-[#071A53] flex flex-wrap  justify-center items-center ">
        <div className="w-full h-full flex  flex-wrap gap-x-[5rem] justify-between items-center text-[1.5rem] text-white/80 max-w-screen-xxl">
          <div className="flex min-[950px]:w-fit min-[570px]:w-full max-[570px]:text-[1.2rem] max-[570px]:leading-none max-[570px]:w-full justify-between gap-[4rem] flex-wrap gap-x-[5rem] gap-y-[1rem]">
            {" "}
            <h1>© 2024 Mirror Diagnostic</h1>
            <ul className="flex gap-[2rem]">
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="terms-conditions">Terms</NavLink>
              </li>
              <li className="hover:cursor-pointer hover:opacity-50">
                <NavLink to="privacy">Privacy</NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex  min-[950px]:w-fit min-[570px]:w-full max-[570px]:text-[1.2rem] max-[570px]:leading-none justify-between gap-[2rem] flex-wrap gap-x-[5rem] gap-y-[1rem]">
            <li>
              Build with ♥ by{" "}
              <a
                className="hover:cursor-pointer hover:opacity-50 font-bold"
                href="http://abhisekmaiti.dev"
                target="_blank"
              >
                abhisekmaiti.dev
              </a>
            </li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
