/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import Itemcard from "../cards/Itemcard";
import ordata from "../../utils/testby.json";
export default function Allcards({ data }) {
  return (
    <>
      <h1 className="w-full h-[5rem] text-[1.5rem] font-bold px-[4rem] py-[2rem] absolute bg-white">
        Choose {data} Tests
      </h1>
      <div className="flex flex-wrap gap-[2rem] px-[4rem] mt-[6rem]">
        {ordata.data.map((item) => {
          let id = nanoid();
          if (item.name === data) {
            return item.tests.map((item) => {
              return (
                <Itemcard
                  key={id}
                  name={item.slice(1)}
                  price={""}
                  type={"tbp"}
                  // data={item.tests}
                />
              );
            });
          }
        })}
        <div className="w-full h-[10rem]"></div>
      </div>
    </>
  );
}
