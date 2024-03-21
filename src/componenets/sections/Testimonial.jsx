/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Testimonial({ img, name, address, data }) {
  return (
    <div className="min-w-[30rem] h-[18rem] rounded-3xl bg-gray-light text-slate-600 text-[1.5rem] flex flex-col justify-between px-[2rem] py-[2rem]">
      <p className="leading-none text-black/50">{data}</p>
      <div className="flex gap-[1rem] items-end">
        <div className="w-[4rem] h-[4rem] rounded-full bg-slate-700 overflow-hidden">
          <img src={img} className="w-full h-full" alt={name} />
        </div>
        <h1 className="flex flex-col leading-none font-bold">
          {name} <span className="font-normal">{address}</span>
        </h1>
      </div>
    </div>
  );
}
