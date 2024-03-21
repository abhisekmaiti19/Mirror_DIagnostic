/* eslint-disable no-undef */
import Searchcontent from "../componenets/sections/Searchcontent";
// import Promo from "../componenets/sections/Promo";
import Choose from "../componenets/sections/Choose";
import Partsbtn from "../componenets/buttons/Partsbtn";
import Allcards from "../componenets/sections/Allcards";
import Testimonial from "../componenets/sections/Testimonial";
import { nanoid } from "nanoid";
import Maincarousel from "../componenets/carousel/Maincarousel";
import testbydata from "../utils/testby.json";
import promo from "../assets/pr1.png";
import promo1 from "../assets/pr2.png";
import rakshit from "../assets/rak.jpeg";
import maharana from "../assets/mah.jpeg";
import anshika from "../assets/ans.jpeg";
import { useState, useRef } from "react";

export default function Home() {
  let items = [
    "Brain",

    "Body",
    "Heart",

    "Intestine",

    "Kidney",

    "Liver",

    "Pancreas",

    "Sexual",

    "Stomach",

    "Thyroid",
  ];
  let slides = [promo, promo1];
  let testimonial = [
    {
      name: "Sawant Bangre",
      img: rakshit,
      address: "Jaipur",
      data: "I am delighted and confident in my recent Blood Sample Collection, as it was executed with meticulous attention to hygiene and safety.",
    },
    {
      name: "Titumir Rathore",
      img: maharana,
      address: "Kota",
      data: "Happy with the services of Mirror Daignostic. A purpose driven Brand which thrives more and more for the safety of all the people.",
    },
    {
      name: "Ankush Gupta",
      img: anshika,
      address: "Jaipur",
      data: "As the staff ensures utmost hygiene and safety. Their efficiency results in the fastest report and timely sample collection.",
    },
  ];

  const [filtername, setFiltername] = useState("Intestine");

  const ref = useRef(null);
  const scrollToRight = () => {
    ref.current.scrollLeft += 260;
  };
  const scrollToLeft = () => {
    ref.current.scrollLeft -= 260;
  };
  return (
    <div className="relative w-full h-full mt-[100px]">
      <Searchcontent />
      {/* <Promo /> */}
      <div className="relative w-full overflow-hidden mt-[2rem] rounded-xl">
        {/* useless works effort : ) min-[1440px]:h-[40rem] min-[1288px]:h-[35rem] min-[760px]:h-[20rem] min-[800px]:h-[22rem] min-[900px]:h-[24rem] min-[1000px]:h-[28rem] min-[1100px]:h-[30rem] min-[280px]:h-[8rem] min-[320px]:h-[8rem] min-[400px]:h-[11rem] min-[500px]:h-[16rem] min-[620px]:h-[18rem] */}
        <Maincarousel slides={slides} />
      </div>
      <Choose />
      <div className="w-full mt-[8rem] flex flex-col gap-[2rem]">
        <h1 className="text-[2rem] font-bold text-blue-primary-light">
          Test by <span className="text-blue-primary-dark">Body Parts</span>
        </h1>
        <div className="relative w-full ">
          <button
            className="absolute right-0 top-[20%] bg-blue-primary-dark/60 hover:bg-blue-primary-dark text-white p-[0.5rem] rounded-full"
            onClick={() => {
              scrollToRight();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-[50%] bg-blue-primary-dark/60 hover:bg-blue-primary-dark text-white p-[0.5rem] rounded-full"
            onClick={() => {
              scrollToLeft();
            }}
          >
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div className="w-full overflow-x-auto" ref={ref}>
            <div className="w-full flex gap-[2rem] mt-[2rem]">
              {testbydata.data.map((it) => {
                let id = nanoid();

                return (
                  <div
                    key={id}
                    onClick={() => {
                      setFiltername(it.name);
                    }}
                  >
                    <Partsbtn mykey={id} text={it.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="overflow-y-auto w-full h-[50rem] relative rounded-3xl border-[1px] border-black/20 shadow-xl">
          <Allcards data={filtername} />
        </div>
      </div>
      <div className="w-full mt-[10rem]">
        <h1 className="text-[2rem] mb-[4rem] font-bold text-blue-primary-light">
          Customers <span className="text-pink-600">loved us</span>
        </h1>
        <div className="w-full flex overflow-hidden gap-[2rem] slidecover">
          <div className="flex justify-start gap-[2rem] slideanime">
            {testimonial.map((item) => {
              let id = nanoid();
              return (
                <Testimonial
                  key={id}
                  img={item.img}
                  name={item.name}
                  address={item.address}
                  data={item.data}
                />
              );
            })}
          </div>
          <div className="flex justify-start gap-[2rem] slideanime">
            {testimonial.map((item) => {
              let id = nanoid();
              return (
                <Testimonial
                  key={id}
                  img={item.img}
                  name={item.name}
                  address={item.address}
                  data={item.data}
                />
              );
            })}
          </div>
          <div className="flex justify-start gap-[2rem] slideanime">
            {testimonial.map((item) => {
              let id = nanoid();
              return (
                <Testimonial
                  key={id}
                  img={item.img}
                  name={item.name}
                  address={item.address}
                  data={item.data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
