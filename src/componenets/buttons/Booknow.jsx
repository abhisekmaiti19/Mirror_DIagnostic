/* eslint-disable react/prop-types */
"use client";

import { Label, Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Booknow({ testname, type, price }) {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [validname, setValidname] = useState(true);
  const [phone, setPhone] = useState("");
  const [validphone, setValidphone] = useState(true);
  const [email, setEmail] = useState("");
  const [validemail, setValidemail] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  //sheetDb
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
            Time: time,
            Date: date,
            Bookings: testname,
          },
        ],
        sheet: "Bookings",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // validation email
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

  return (
    <div className="overflow-y-scroll">
      {type === "pckg" ? (
        <button
          className="w-full bg-gradient-to-l from-blue-primary-dark to-blue-primary-light text-white text-[2rem] mt-[3rem] p-[1rem] rounded-lg hover:bg-gradient-to-l hover:from-white border-[0.1rem] border-blue/0 hover:border-blue-primary-dark hover:text-blue-primary-dark transition-all duration-300 ease-in-out"
          onClick={() => setOpenModal(true)}
        >
          {`Book now for ₹ ${price}`}
        </button>
      ) : (
        <button
          className="px-4 py-2 rounded-xl bg-white w-fit text-[1.4rem] hover:cursor-pointer max-[350px]:text-[1.2rem] max-[350px]:rounded-xl max-[350px]:w-full max-[350px]:text-center hover:font-bold transition-all duration-100 ease-in"
          onClick={() => {
            // toast.success("Success");
            setOpenModal(true);
          }}
        >
          {" "}
          <span className="text-[1.5rem]">Book Now</span>
        </button>
      )}
      <Modal
        dismissible
        show={openModal}
        size="5xl"
        onClose={onCloseModal}
        className="mt-[50px] max-[760px]:mt-[80px] overflow-y-scroll"
        popup
      >
        <div className="overflow-y-scroll border-4 rounded border-blue-primary-light">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-2 overflow-y-scroll" id="myform">
              <h3 className="text-[2rem] font-medium text-gray-900 dark:text-white flex flex-col leading-none">
                <span className="font-bold">Enter your details and book</span>
                <div>
                  <input
                    type="text"
                    value={testname}
                    name="Bookings"
                    disabled
                    className="w-full text-[1.5rem] text-black rounded-lg outline-black border-none"
                  />
                </div>
              </h3>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="name"
                    value="Name"
                    className="text-[1.5rem]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  name="Name"
                  onChange={(e) => {
                    setName(e.target.value);

                    validateName(e.target.value)
                      ? setValidname(true)
                      : setValidname(false);
                  }}
                  className="w-full text-[1.5rem] p-[1rem] rounded-lg bg-gray-light outline-black border-none"
                />
                {validname === false ? (
                  <span className="text-red-500 text-[1.2rem]">
                    Please enter valid name
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="phone"
                    value="Phone number"
                    className="text-[1.5rem]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  name="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);

                    validatePhone(e.target.value)
                      ? setValidphone(true)
                      : setValidphone(false);
                  }}
                  className="w-full text-[1.5rem] p-[1rem] text-black rounded-lg bg-gray-light outline-black border-none"
                />
                {validphone === false ? (
                  <span className="text-red-500 text-[1.2rem]">
                    Please enter valid Phone number
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="email"
                    value="Your email"
                    className="text-[1.5rem]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email-id"
                  value={email}
                  name="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // console.log(validateEmail(e.target.value));
                    validateEmail(e.target.value)
                      ? setValidemail(true)
                      : setValidemail(false);
                  }}
                  className="w-full text-[1.5rem] p-[1rem] text-black rounded-lg bg-gray-light outline-black border-none"
                />
                {validemail === false ? (
                  <span className="text-red-500 text-[1.2rem]">
                    Please enter valid E-mail id
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="date"
                    value="Visit Date"
                    className="text-[1.5rem]"
                  />
                </div>
                <input
                  type="date"
                  placeholder="Enter your email-id"
                  value={date}
                  name="Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="w-full text-[1.5rem] p-[1rem] text-black rounded-lg bg-gray-light outline-black border-none"
                />
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label
                    htmlFor="time"
                    value="Visit Time"
                    className="text-[1.5rem]"
                  />
                </div>
                <input
                  type="time"
                  placeholder="Enter your email-id"
                  value={time}
                  name="Time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="w-full text-[1.5rem] p-[1rem] text-black rounded-lg bg-gray-light outline-black border-none"
                />
              </div>

              <div className="w-full">
                <button
                  className={`px-4 py-2 rounded-xl ${`bg-blue-primary-light`}  text-white w-fit text-[1.4rem] hover:cursor-pointer max-[350px]:text-[1.2rem] max-[350px]:rounded-xl max-[350px]:w-full max-[350px]:text-center hover:font-bold transition-all duration-100 ease-in`}
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
                          success:
                            "Booking Confirmed our team will contact you soon",
                          error: "Something went wrong",
                        },
                        {
                          className: "text-[2rem]",
                          position: "bottom-center",
                        }
                      );

                      setOpenModal(false);
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
                  {" "}
                  <span className="text-[1.5rem]">Book Now</span>
                </button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
