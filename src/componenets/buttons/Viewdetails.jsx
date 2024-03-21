/* eslint-disable react/prop-types */
"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

export default function Modalbutton({ headtext, data }) {
  const [openModal, setOpenModal] = useState(false);

  function titleCase(str) {
    if (str === undefined) {
      return "no data";
    }
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)}>View Details</button>

      <Modal
        dismissible
        show={openModal}
        size={"5xl"}
        onClose={() => setOpenModal(false)}
        className="max-[760px]:mt-[100px]"
      >
        <div className="p-[2rem]">
          <Modal.Header>
            {" "}
            <span className="text-[2rem]">{headtext}</span>{" "}
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6 ">
              <p className="text-[1.5rem] leading-relaxed text-gray-500 dark:text-gray-400 ">
                {data.map((item) => titleCase(item)).join(` , `)}
              </p>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <button
              onClick={() => setOpenModal(false)}
              className="text-[1.5rem] border-[1px] rounded-xl px-[1rem] border-black/20 p-2"
            >
              Book Now
            </button>
          </Modal.Footer> */}
        </div>
      </Modal>
    </>
  );
}
