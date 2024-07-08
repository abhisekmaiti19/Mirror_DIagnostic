import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./componenets/navabar/Mainnavbar";
import Mainfooter from "./componenets/footer/Mainfooter";
import { Toaster } from "react-hot-toast";
import whatsapp from "./assets/whatsapp.webp";
// import Inquery from "./componenets/sections/Inquery";
import SearchContextProvider from "./context/searchContext/SearchContextProvider";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-between ">
        <div className="relative max-w-screen-xxl w-full md:px-[4rem] max-md:px-[2rem]">
          <a
            className="fixed z-[9999] bottom-[5rem] right-[5rem] max-md:right-[2rem] max-md:bottom-[2rem] "
            href="https://api.whatsapp.com/send/?phone=+919647775335&text=Hello_Abhisek"
            target="_blank"
          >
            <img
              src={whatsapp}
              className="absolute w-[5rem] max-lg:w-[5rem] animate-ping"
              alt=""
            />
            <img src={whatsapp} className="w-[5rem] max-lg:w-[5rem]" alt="" />
          </a>
          <Toaster />
          <SearchContextProvider>
            <Outlet />
          </SearchContextProvider>
        </div>

        {/* footer  */}

        <Mainfooter />
      </div>
    </div>
  );
}

export default App;
