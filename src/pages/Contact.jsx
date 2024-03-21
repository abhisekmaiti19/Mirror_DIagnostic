// import React from 'react'
import { useState } from "react";
import toast from "react-hot-toast";
export default function Contact() {
  const [name, setName] = useState("");
  const [validname, setValidname] = useState(true);
  const [phone, setPhone] = useState("");
  const [validphone, setValidphone] = useState(true);
  const [email, setEmail] = useState("");
  const [validemail, setValidemail] = useState(true);
  const [msg, setMsg] = useState("");

  function validateEmail(inputText) {
    let arr = inputText.split(" ");
    let arr2 = inputText.split(".");
    if (
      arr.length === 1 &&
      inputText.includes("@") &&
      inputText.includes(".") &&
      arr2.length === 2 &&
      arr2[1] != ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  // name validation
  function validateName(fullname) {
    var namePattern = /^[a-zA-Z\s-]+$/;

    if (!namePattern.test(fullname)) {
      return false;
    }

    return true;
  }

  // phone number validation
  function validatePhone(phonenumber) {
    var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(Number(phonenumber));
  }

  // sheetdb
  async function Submit() {
    await fetch("https://sheetdb.io/api/v1/i2ubuj8a3ccus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Name: name,
            Phone: phone,
            Email: email,
            Message: `${msg.length > 0 ? msg : `Please call me !`}`,
          },
        ],
        sheet: "Contact_us",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="relative w-full h-full mt-[100px]">
      {/* // about us with counter  */}
      <div className="w-full [@media(min-width:550px)]:h-[12rem] [@media(min-width:550px)]:px-[8rem] [@media(max-width:550px)]:px-[3rem] rounded-2xl text-blue-primary-dark bg-gradient-to-l from-blue-secondary-dark to-blue-secondary-light flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:h-fit [@media(max-width:550px)]:items-start py-[2rem] justify-center gap-[2rem] items-center">
        <div className="flex flex-col gap-[1rem] max-[550px]:w-full items-center">
          <h1 className="leading-none text-[3rem] font-bold max-[550px]:text-[2rem]">
            Contact Us
          </h1>
          <h1 className="leading-none text-[2rem] max-[550px]:text-[1.5rem]">
            {" "}
            We are available 24x7 for you
          </h1>
        </div>
        {/* <div className="flex gap-[8rem] max-[550px]:gap-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="leading-none text-[2rem] font-bold" id="two">
              +91-9509700711
            </h1>
            <h1 className="leading-none text-[2rem] max-[550px]:text-[1.2rem]">
              {" "}
              Contact Us
            </h1>
          </div>
        </div> */}
      </div>

      {/* forms and maps  */}
      <div className="w-full flex gap-[4rem] mt-[4rem] [@media(max-width:1200px)]:flex-col">
        <div className=" flex flex-col gap-[2rem] text-blue-primary-dark font-bold">
          <h1 className="text-[3rem] leading-none">Send us your Inquiry</h1>
          <p className="text-[1.8rem] font-normal leading-none mb-[3rem]">
            Our team will get back to you for more details
          </p>
          <div className="google-maps rounded-xl  shadow-xl [@media(min-width:700px)]:w-[50rem] [@media(min-width:1200px)]:h-[40rem] [@media(max-width:700px)]:h-[45rem] [@media(max-width:700px)]:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1881748303745!2d75.85125017596005!3d25.196875831712603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9ae20cb0d165%3A0xa1526dfee72a093b!2sKharoliwal%20Hospital!5e0!3m2!1sen!2sin!4v1710287035045!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[2rem] text-[1.5rem]">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-[2rem] bg-gray-light rounded-xl text-[1.5rem]"
            value={name}
            name="Name"
            onChange={(e) => {
              setName(e.target.value);

              validateName(e.target.value)
                ? setValidname(true)
                : setValidname(false);
            }}
          />
          {validname === false ? (
            <span className="text-red-500 text-[1.2rem]">
              Please enter valid name
            </span>
          ) : (
            ""
          )}
          <input
            type="tel"
            placeholder="Email Id"
            className="w-full p-[2rem] bg-gray-light rounded-xl text-[1.5rem]"
            value={email}
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(validateEmail(e.target.value));
              validateEmail(e.target.value)
                ? setValidemail(true)
                : setValidemail(false);
            }}
          />
          {validemail === false ? (
            <span className="text-red-500 text-[1.2rem]">
              Please enter valid E-mail id
            </span>
          ) : (
            ""
          )}
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-[2rem] bg-gray-light rounded-xl text-[1.5rem]"
            value={phone}
            name="Phone"
            onChange={(e) => {
              setPhone(e.target.value);

              validatePhone(e.target.value)
                ? setValidphone(true)
                : setValidphone(false);
            }}
          />
          {validphone === false ? (
            <span className="text-red-500 text-[1.2rem]">
              Please enter valid Phone number
            </span>
          ) : (
            ""
          )}
          <textarea
            name=""
            placeholder="Your query"
            id=""
            cols="30"
            rows="10"
            className="w-full p-[2rem] bg-gray-light rounded-xl text-[1.5rem]"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          ></textarea>
          <button
            className="w-fit p-[2rem] px-[4rem] text-white rounded-xl text-[1.5rem] bg-gradient-to-l from-blue-primary-dark to-blue-primary-light hover:shadow-md hover:shadow-black"
            onClick={() => {
              // res.preventDefault();

              if (
                validemail &&
                validname &&
                validphone &&
                email.length > 0 &&
                name.length > 0 &&
                phone.length > 0
              ) {
                toast.promise(
                  Submit(),
                  {
                    loading: "Please wait..",
                    success: "Our team will contact you soon.",
                    error: "Something went wrong",
                  },
                  {
                    className: "text-[2rem]",
                    position: "bottom-center",
                  }
                );
                setEmail("");
                setName("");
                setPhone("");
              } else {
                toast.error("Please enter correct/all details", {
                  className: "text-[2rem]",
                  position: "bottom-center",
                });
              }
            }}
          >
            Request a callback
          </button>
        </div>
      </div>
    </div>
  );
}
