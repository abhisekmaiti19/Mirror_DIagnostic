// import React from 'react'
import { nanoid } from "nanoid";
import Itemcard from "../componenets/cards/Itemcard.jsx";
import Pricing from "../componenets/cards/Pricing.jsx";
import packagedata from "../utils/packages.json";
import profiles from "../utils/profiles.json";

export default function Tests() {
  return (
    <div className="relative w-full h-full mt-[150px] ">
      <div className="flex flex-col gap-[2rem] flex-wrap justify-between mb-[8rem]">
        {/* <Searchpck /> */}
        <div className="w-full mb-[4rem]">
          <h1 className="text-[3rem] font-semibold text-blue-primary-dark text-center">
            {" "}
            Explore Our Exciting Packages!{" "}
          </h1>
          <p className="text-[1.8rem] mt-[2rem] text-center xl:px-[20rem]">
            Each of our diagnostic packages offers a meticulous blend of
            cutting-edge medical technologies and expert clinical analysis,
            providing you with a holistic understanding of your current health
            status.
          </p>
        </div>
        <div className="text-[2rem] font-semibold text-blue-primary-dark flex justify-center">
          {" "}
          <h1 className="border-2 shadow-2xl px-[3rem] py-[1rem] rounded-xl mb-[4rem] bg-gradient-to-l from-blue-primary-dark to-blue-primary-light text-white">
            Smart Bharat Health Packages{" "}
          </h1>
        </div>

        <div className="flex gap-[2rem] flex-wrap justify-between mb-[8rem]">
          {packagedata.data.map((item) => {
            let id = nanoid();
            return (
              <Pricing
                key={id}
                pckname={item.name}
                price={item.price}
                data={item.tests}
              />
            );
          })}
        </div>
      </div>

      <div className="text-[2rem] font-semibold text-blue-primary-dark flex justify-center">
        {" "}
        <h1 className="border-2 border-blue-primary-dark shadow-xl px-[3rem] py-[1rem] rounded-xl mb-[4rem] bg-gradient-to-l from-blue-secondary-dark to-blue-secondary-light text-blue-primary-dark">
          Other Packages{" "}
        </h1>
      </div>

      <div className="w-full mt-[2rem] flex flex-wrap gap-[2rem] justify-between">
        {profiles.data.map((item) => {
          let id = nanoid();
          return (
            <Itemcard
              key={id}
              name={item.name}
              price={item.price}
              type={"profile"}
              data={item.tests}
            />
          );
        })}
      </div>
    </div>
  );
}
