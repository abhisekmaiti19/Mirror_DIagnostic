import { useEffect } from "react";
import aboutus from "../assets/aboutus.png";
import abhisek from "../assets/500500.png";
import quote from "../assets/quote.png";
import smile from "../assets/smile.png";
import trust from "../assets/trust.png";
import support from "../assets/support.png";
import excel from "../assets/excel.png";

export default function About() {
  useEffect(() => {
    let startone = 100;
    let myid = setInterval(() => {
      document.getElementById("one").innerText = `${startone}+`;
      startone = startone + 100;
      if (startone === 8100) {
        clearInterval(myid);
      }
    }, 50);

    return () => clearInterval(myid);
  }, []);
  useEffect(() => {
    let startone = 100;
    let myid = setInterval(() => {
      document.getElementById("two").innerText = `${startone}+`;
      startone = startone + 100;
      if (startone === 4100) {
        clearInterval(myid);
      }
    }, 100);

    return () => clearInterval(myid);
  }, []);
  useEffect(() => {
    let startone = 0;
    let myid = setInterval(() => {
      document.getElementById("three").innerText = `${startone}+`;
      startone = startone + 1;
      if (startone === 11) {
        clearInterval(myid);
      }
    }, 100);

    return () => clearInterval(myid);
  }, []);

  useEffect(() => {
    let startone = 0;
    let myid = setInterval(() => {
      document.getElementById("four").innerText = `${startone}+`;
      startone = startone + 1;
      if (startone === 15) {
        clearInterval(myid);
      }
    }, 100);

    return () => clearInterval(myid);
  }, []);
  return (
    <div className="relative w-full h-full mt-[108px]">
      {/* // about us with counter  */}
      <div className="w-full [@media(min-width:550px)]:h-[12rem] [@media(min-width:550px)]:px-[8rem] [@media(max-width:550px)]:px-[3rem] rounded-2xl text-blue-primary-dark bg-gradient-to-l from-blue-secondary-dark to-blue-secondary-light flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:h-fit [@media(max-width:550px)]:items-start py-[2rem] gap-[2rem] justify-center items-center">
        <div className="flex flex-col gap-[1rem] max-[550px]:w-full">
          <h1 className="leading-none text-[3rem] font-bold max-[550px]:text-[2rem] text-center">
            About Us
          </h1>
        </div>
      </div>
      {/* who we are  */}
      <div className="w-full flex gap-[8rem] items-end [@media(max-width:580px)]:gap-[4rem] mt-[8rem] [@media(max-width:1200px)]:flex-col [@media(max-width:1200px)]:items-start">
        <img
          src={aboutus}
          className="[@media(min-width:580px)]:h-[30rem] [@media(min-width:580px)]:w-[60rem] [@media(max-width:580px)]:h-[15rem] [@media(max-width:580px)]:w-[30rem]"
          alt=""
        />
        <div className="w-full flex flex-col gap-[4rem] [@media(max-width:580px)]:gap-[2rem]">
          <h1 className="text-[3rem] font-bold text-blue-primary-dark max-[580px]:text-[3rem] [@media(max-width:580px)]:text-center">
            Who we are ?
          </h1>
          <p className="text-[2rem] [@media(max-width:580px)]:text-[1.8rem] [@media(max-width:580px)]:px-[2rem]">
            Welcome to NovoMed Diagnostics, your trusted partner in healthcare
            located in Kolkata. We are proud to be ISO certified, ensuring that
            our services meet the highest standards of quality and reliability.
            At NovoMed Diagnostics, we offer a comprehensive range of pathology
            tests designed to cater to your health needs with accuracy and
            efficiency. Our experienced team of phlebotomists is dedicated to
            providing you with a seamless and comfortable experience during
            sample collection. Under the guidance of our skilled pathologist,
            they ensure that every sample is handled with care and precision,
            maintaining the integrity of the results. What sets us apart is our
            commitment to excellence in service delivery. We understand the
            importance of timely and accurate results in healthcare
            decision-making.
          </p>
        </div>
      </div>
      {/* mind behid us  */}
      <div className="w-full mt-[10rem]">
        <h1 className="text-[3rem] text-center font-bold text-blue-primary-dark">
          Mind Behind us
        </h1>
        <div className="w-full flex gap-[16rem] [@media(max-width:1000px)]:gap-[2rem] px-[3rem] items-end [@media(min-width:1440px)]:items-start [@media(max-width:1000px)]:mt-[4rem] [@media(max-width:1000px)]:flex-col [@media(max-width:1000px)]:items-center">
          <div className="min-w-[30rem] h-[30rem] rounded-2xl overflow-hidden relative">
            <img src={abhisek} className="w-full h-full grayscale " alt="" />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-blue-secondary-dark/80 to-transparent flex items-end justify-center p-[2rem]">
              <h1 className="text-[2rem] font-black text-white">
                Mr. Abhisek Maiti
              </h1>
            </div>
          </div>
          <div className="w-full relative text-[2rem]">
            <img src={quote} className="absolute right-2 top-0" alt="" />
            <p className="mt-[5rem]">
              Hello, {"I'm"} Abhisek Maiti, the driving force behind Novomed
              Diagnostic. With a deep-rooted passion for improving healthcare
              outcomes, I founded Novomed Diagnostic with a singular vision: to
              redefine diagnostic healthcare with integrity, expertise, and a
              patient-centric approach. My journey into the world of diagnostics
              stems from a genuine desire to make a positive impact on{" "}
              {"people's"}
              lives. As a healthcare professional, I have witnessed firsthand
              the challenges and opportunities within the industry. Through
              Novomed Diagnostic, I aim to address these challenges by providing
              reliable, efficient, and accessible diagnostic services tailored
              to the needs of our patients and healthcare partners. {
                "It's"
              }{" "}
              this understanding that drives us to go above and beyond to
              deliver care and comfort to those in need. Thank you for
              entrusting Novomed Diagnostic with your healthcare needs.
            </p>
          </div>
        </div>
      </div>
      {/* counter  */}
      <div className="w-full rounded-3xl bg-gradient-to-l from-transparent via-gray-light to-transparent flex [@media(max-width:1200px)]:flex-col justify-between gap-[8rem] max-[550px]:gap-[2rem] my-[16rem] py-[4rem] px-[4rem]">
        <h1 className="text-[3rem] font-bold text-blue-primary-dark">
          We belive in numbers
        </h1>
        <div className="flex gap-[4rem] flex-wrap">
          <div className="flex flex-row-reverse items-end gap-[2rem]">
            <h1
              className="leading-none text-[3rem] font-bold text-center"
              id="one"
            >
              --
            </h1>
            <h1 className="leading-none flex flex-col text-[2rem] max-[550px]:text-[1.2rem]">
              {" "}
              Patient <span>Served</span>
            </h1>
          </div>
          <div className="flex flex-row-reverse items-end gap-[2rem]">
            <h1
              className="leading-none text-[3rem] font-bold text-center"
              id="two"
            >
              --
            </h1>
            <h1 className="leading-none flex flex-col text-[2rem] max-[550px]:text-[1.2rem]">
              {" "}
              Total <span>Tests</span>
            </h1>
          </div>
          <div className="flex flex-row-reverse items-end gap-[2rem]">
            <h1
              className="leading-none text-[3rem] font-bold text-center"
              id="three"
            >
              --
            </h1>
            <h1 className="leading-none flex flex-col text-[2rem] max-[550px]:text-[1.2rem]">
              {" "}
              Total Years<span>of Experience</span>
            </h1>
          </div>
          <div className="flex flex-row-reverse items-end gap-[2rem]">
            <h1
              className="leading-none text-[3rem] font-bold text-center"
              id="four"
            >
              --
            </h1>
            <h1 className="leading-none flex flex-col text-[2rem] max-[550px]:text-[1.2rem]">
              {" "}
              Team <span> Members</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Our Mission and vission  */}
      <div className="w-full mb-[16rem]">
        <h1 className="text-[3rem] text-center font-bold text-blue-primary-dark">
          Our Mission and vission
        </h1>
        <div className="mt-[8rem] w-full flex justify-between [@media(max-width:450px)]:justify-center flex-wrap items-start gap-[2rem]">
          <div className="flex flex-col gap-[1rem] items-center w-[20rem]">
            <img src={smile} className="w-[5rem] h-[5rem]" alt="" />
            <h1 className="text-[2rem] font-bold text-blue-primary-dark">
              CUSTOMER FIRST
            </h1>
            <p className="text-[1.8rem] text-center leading-tight">
              We encourage all our activities to exceed customer experience and
              deliver the WOW experience.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center w-[20rem]">
            <img src={trust} className="w-[5rem] h-[5rem]" alt="" />
            <h1 className="text-[2rem] font-bold text-blue-primary-dark">
              ACCOUNTABILITY
            </h1>
            <p className="text-[1.8rem] text-center leading-tight">
              At our esteemed diagnostic organization in Rajasthan, we strongly
              advocate for a culture of proactive efforts at all levels
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center w-[20rem]">
            <img src={support} className="w-[5rem] h-[5rem]" alt="" />
            <h1 className="text-[2rem] font-bold text-blue-primary-dark">
              RESPECT & Trust
            </h1>
            <p className="text-[1.8rem] text-center leading-tight">
              The significance of every patient is deeply acknowledged by us,
              and we ensure that each individual is treated with the utmost
              respect and dignity.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center w-[20rem]">
            <img src={excel} className="w-[5rem] h-[5rem]" alt="" />
            <h1 className="text-[2rem] font-bold text-blue-primary-dark">
              EXCELLENCE
            </h1>
            <p className="text-[1.8rem] text-center leading-tight">
              Our commitment to excellence is evident in every aspect of our
              work, from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
