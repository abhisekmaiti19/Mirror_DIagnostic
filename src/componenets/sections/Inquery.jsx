export default function Inquery() {
  return (
    <div className="w-full h-[40rem] flex justify-center">
      <div className="min-[1200px]:w-[100rem]  h-full bg-white rounded-3xl shadow-2xl p-1 flex">
        <div className="w-1/2 h-full rounded-3xl relative border-2 border-black overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-blue-primary-dark to-transparent"></div>
        </div>
        <div className="w-1/2 h-full border-black overflow-hidden p-[4rem] flex flex-col gap-[2rem]">
          <h1 className="flex flex-col justify-start text-[3rem] text-blue-primary-dark font-bold">
            Send us your Inquiry{" "}
            <span className="text-[1.4rem] font-semibold text-black/50">
              Our team will get back to you for more details
            </span>
          </h1>
          <div className="flex flex-col gap-[1rem] w-full h-full">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-[1rem] rounded-xl bg-gray-light text-black/50 text-[1.5rem]"
            />
            <input
              type="text"
              placeholder="Your mobile number"
              className="w-full p-[1rem] rounded-xl bg-gray-light text-black/50 text-[1.5rem]"
            />
            <input
              type="text"
              placeholder="Describe your query"
              className="w-full h-full p-[1rem] rounded-xl bg-gray-light text-black/50 text-[1.5rem]"
            />
            <button className="px-[2rem] py-[1rem] w-fit rounded-full bg-gradient-to-l from-blue-primary-dark to-blue-primary-light text-[1.4rem] font-semibold text-white">
              Request a call back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
