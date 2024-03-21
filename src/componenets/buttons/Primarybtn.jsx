function Primarybutton() {
  return (
    <div className="px-[2rem] py-[1rem] flex gap-[1rem] text-[2rem] bg-white w-fit items-center rounded">
      Book Now
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2.5rem] h-[2.5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
}

export default Primarybutton;
