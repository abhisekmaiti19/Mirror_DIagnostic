/* eslint-disable react/prop-types */
import blood from "../../assets/parts/blood.png";
import cardiovascular_system from "../../assets/parts/cardiovascular_system.png";
import immune from "../../assets/parts/immune.png";
import intestine from "../../assets/parts/intestine.png";
import kidney from "../../assets/parts/kidney.png";
import liver from "../../assets/parts/liver.png";
import nervous from "../../assets/parts/nervous.png";
import pancreas from "../../assets/parts/nervous.png";
import reproductive_system from "../../assets/parts/reproductive_system.png";
import stomach from "../../assets/parts/stomach.png";
import thyroid from "../../assets/parts/thyroid.png";
import urinary from "../../assets/parts/urinary.png";
import respiratory_system from "../../assets/parts/respiratory_system.png";

// eslint-disable-next-line no-unused-vars
export default function Partsbtn({ text, mykey }) {
  let items = [
    {
      item: "Blood",
      img: (
        <img
          src={blood}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },

    {
      item: "Intestine",
      img: (
        <img
          src={intestine}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Kidney",
      img: (
        <img
          src={kidney}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Liver",
      img: (
        <img
          src={liver}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Pancreas",
      img: (
        <img
          src={pancreas}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Reproductive",
      img: (
        <img
          src={reproductive_system}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Stomach",
      img: (
        <img
          src={stomach}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Thyroid",
      img: (
        <img
          src={thyroid}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Cardiovascular",
      img: (
        <img
          src={cardiovascular_system}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Respiratory",
      img: (
        <img
          src={respiratory_system}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Urinary",
      img: (
        <img
          src={urinary}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Nervous",
      img: (
        <img
          src={nervous}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
    {
      item: "Immune",
      img: (
        <img
          src={immune}
          className="min-w-[4rem] max-w-[4rem] min-h-[4rem]"
          key={mykey}
          alt=""
        />
      ),
    },
  ];
  return (
    <button className="flex flex-col gap-[1rem] justify-center items-center text-[1.5rem] hover:opacity-50">
      {items.map((it) => {
        if (it.item === text) {
          return (
            <>
              <div className="bg-blue-200/50 p-[2rem] rounded-xl">{it.img}</div>
              {it.item}
            </>
          );
        }
      })}
      {/* <div className="bg-blue-200/50 p-[1rem] rounded-xl">{text}</div> */}
    </button>
  );
}
