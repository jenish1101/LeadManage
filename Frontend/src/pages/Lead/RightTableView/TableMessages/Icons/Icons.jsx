import React from "react";

//icons
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io"

export const Footer = () => {
  return (
    <>
      <div className="bottom-msg">
        <div className="bm-left">
          <h1>
            <MdDeleteOutline style={{ color: "red" }} />
          </h1>
          <h1>
            <AiOutlineLink style={{ color: "greenyellow" }} />
          </h1>
          <h1>
            <FaArrowTrendUp style={{ color: "black" }} />
          </h1>
          <h1>
            <MdOutlineEmail />
          </h1>
          <h1>
            <FiMessageSquare style={{ color: "red" }} />
          </h1>
          <h1>
            <FaWhatsapp style={{ color: "green" }} />
          </h1>
          <h1>
            <LuBuilding2 style={{ color: "orange" }} />
          </h1>
          <h1>
            <FaUserPlus style={{ color: "blue" }} />
          </h1>
        </div>
        <div className="bm-right">
          <h1>
            <IoIosSend style={{ color: "gray" }} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer