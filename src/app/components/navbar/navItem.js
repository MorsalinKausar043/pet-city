"use client";

import React, { useState } from "react";
import Button from "../../utils/Button";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import Image from "next/image";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "JOBS", link: "/job" },
    { name: "ABOUT", link: "/about" },
    { name: "POST JOB", link: "/jobpost" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full h-full flex justify-center items-center">
      <div className="md:flex items-center justify-between bg-white py-4 px-2 md:px-10 lg:px-20 container">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Link href="/">
            <Image
              src="/petcity3.png"
              width={140}
              height={100}
              alt="petCity-logo-image"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <span>{open ? <AiOutlineClose /> : <AiOutlineMenuFold />}</span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-19 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-sm md:text-xs md:my-0 my-7"
            >
              <Link
                href={link.link}
                className="text-gray-800 hover:text-lime-500 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button>Join Us</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
