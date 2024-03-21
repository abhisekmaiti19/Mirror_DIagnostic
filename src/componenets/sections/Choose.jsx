import { nanoid } from "nanoid";
import Choosebutton from "../buttons/Choosebtn";
// import Allcards from "./Allcards";
import { useState } from "react";
import testdata from "../../utils/testdata.json";
import packages from "../../utils/packages.json";
import profiles from "../../utils/profiles.json";
import Itemcard from "../cards/Itemcard";

export default function Choose() {
  let choose = [
    "Book Lab Tests",
    "Popular Health Checks",
    "Full Body Checkups",
  ];
  const [bltclick, setBltclick] = useState(true);
  const [phcclick, setPhcclick] = useState(false);
  const [fbcclick, setFbcclick] = useState(false);
  const [type, setType] = useState("cmn");
  const [data, setData] = useState(testdata);
  const [title, setTitle] = useState("Lab Tests");
  let array = [];
  for (let i = 0; i < choose.length; i++) {
    let id = nanoid();
    array.push(id);
  }

  return (
    <div className="mt-[4rem] w-full flex max-md:flex-col h-[55rem] gap-[4rem] items-start justify-between">
      <div className="md:w-fit md:h-fit max-md:flex max-md:flex-wrap max-md:w-[90vw] gap-[2rem]">
        <div
          className={`w-fit h-fit max-md:rounded-lg md:rounded-3xl ${
            bltclick ? `opacity-100 shadow-md shadow-black` : `opacity-50`
          } transition-all  duration-150 ease-in-out`}
          onClick={() => {
            setBltclick(true);
            setPhcclick(false);
            setFbcclick(false);
            setType("cmn");
            setData(testdata);
            setTitle("Lab Tests");
          }}
        >
          <Choosebutton text={choose[0]} />
        </div>
        <div
          className={`w-fit h-fit max-md:rounded-lg md:rounded-3xl ${
            phcclick ? `opacity-100 shadow-md shadow-black` : `opacity-50`
          } transition-all duration-150 ease-in-out`}
          onClick={() => {
            setBltclick(false);
            setPhcclick(true);
            setFbcclick(false);
            setType("profile");
            setData(profiles);
            setTitle("Health Checks");
          }}
        >
          <Choosebutton text={choose[1]} />
        </div>
        <div
          className={`w-fit h-fit max-md:rounded-lg md:rounded-3xl ${
            fbcclick ? `opacity-100 shadow-md shadow-black` : `opacity-50`
          } transition-all duration-150 ease-in-out`}
          onClick={() => {
            setBltclick(false);
            setPhcclick(false);
            setFbcclick(true);
            setType("profile");
            setData(packages);
            setTitle("Full Body Checkups");
          }}
        >
          <Choosebutton text={choose[2]} />
        </div>
      </div>

      <div className="relative w-full h-full border-[1px] rounded-3xl border-black/20 overflow-y-auto shadow-xl ">
        {/* for item title  */}
        {/* <Allcards data={data} /> */}
        <h1 className="w-full h-[5rem] text-[1.5rem] font-bold px-[4rem] py-[2rem] absolute bg-white">
          Choose {title}
        </h1>
        <div className="flex flex-wrap gap-[2rem] px-[4rem] mt-[6rem]">
          {data.data.map((item) => {
            let id = nanoid();
            return (
              <Itemcard
                key={id}
                name={item.name}
                price={item.price}
                type={type}
                data={item.tests}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
