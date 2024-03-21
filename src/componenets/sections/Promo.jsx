import tick from "../../assets/tick.png";
import Primarybutton from "../buttons/Primarybtn";
import family from "../../assets/family.png";
export default function Promo() {
  return (
    <div className="relative overflow-hidden w-full h-[43rem] bg-gradient-to-r from-blue-primary-light to-blue-primary-dark mt-[2rem] rounded-3xl px-[8rem] py-[4rem] flex flex-col gap-[4rem] justify-center">
      <h1 className="text-[4.5rem] w-[40%] leading-tight font-black text-white">
        Full Body Checkup Now at ₹599
      </h1>
      <div className="w-fit flex flex-col gap-[2rem]">
        <div className="flex gap-[2rem] text-white text-[2rem]">
          <img src={tick} alt="" />
          Full Body Checkup
        </div>
        <div className="flex gap-[2rem] text-white text-[2rem]">
          <img src={tick} alt="" />
          Free home sample pickup
        </div>
      </div>
      <Primarybutton />
      <img src={family} className="absolute right-[8rem] bottom-0" alt="" />
    </div>
  );
}
