import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineSlack } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center flex-wrap px-8 md:px-14">
        {/* left side  */}
        <div>
          <h1 className="text-gray-400 text-xs font-light">
            Copyright <span className="text-gray-200">©</span> 2014 PetSitter |
            All Rights Reserved
          </h1>
        </div>
        {/* right side  */}
        <div className="flex flex-row items-end">
          <span className="text-sm font-light text-gray-400">
            Keep in Touch
          </span>
          <span className="ml-2 text-md cursor-pointer p-1 rounded-full hover:bg-lime-400 transition">
            <FaFacebookF />
          </span>
          <span className="ml-2 text-md cursor-pointer p-1 rounded-full hover:bg-lime-400 transition">
            <AiOutlineTwitter />
          </span>
          <span className="ml-2 text-md cursor-pointer p-1 rounded-full hover:bg-lime-400 transition">
            <FaLinkedinIn />
          </span>
          <span className="ml-2 text-md cursor-pointer p-1 rounded-full hover:bg-lime-400 transition">
            <FaInstagram />
          </span>
          <span className="ml-2 text-md cursor-pointer p-1 rounded-full hover:bg-lime-400 transition">
            <AiOutlineSlack />
          </span>
        </div>
      </div>
    </>
  );
}

export default FooterBottom
