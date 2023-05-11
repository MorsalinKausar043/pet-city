import Image from "next/image";
import React from "react";
import style from "../style/ownersitter.module.css";
import { MdCreate } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

const Sitter = () => {
  const data = [
    {
      id: 1,
      title: "Create a Free Profile",
      body: "Create a free profile now and start your business of pet sitting!",
      icon: <MdCreate />,
    },
    {
      id: 2,
      title: "Set Your Schedule",
      body: "You can set online/offline depending on your demand that you want any pet to sit or not as per your need",
      icon: <AiTwotoneCalendar />,
    },
    {
      id: 3,
      title: "Become a Star",
      body: "After compleating some successfull pet sitting you will be awarded with the best pet sitter badge which will show on top of your profile!",
      icon: <BsStarFill />,
    },
  ];
  return (
    <>
      <div className="flex justify-around items-center flex-wrap  pb-14 mt-12">
        {/* left site  */}
        <div
          className={`${style.sitter_img_box} order-2 relative flex justify-center items-center mt-8 md:mt-0`}
        >
          <Image
            src="/po2.png"
            width={544}
            height={300}
            alt="Owner-image"
            className={`cursor-pointer`}
          />
        </div>
        {/* right site  */}
        <div className="mt-8 md:mt-0 order-1">
          <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600">
            For Pet Sitters
          </h1>

          {data.map((val) => (
            <>
              <div
                key={val.id}
                className="w-full h-full flex flex-row justify-center items-center mt-12"
              >
                {/* left  */}
                <div
                  className={`p-4 border-[3px] border-lime-500 hover:bg-lime-500 transition rounded-full ${style.icon_box}`}
                >
                  <span
                    className={`${style.icon} block text-lime-500 hover:text-white text-2xl font-extrabold`}
                  >
                    {val.icon}
                  </span>
                </div>
                {/* right  */}
                <div className="ml-6 flex flex-col justify-start items-start">
                  <h1 className="text-xl mb-4 text-gray-600">{val.title}</h1>
                  <p className="text-sm text-gray-500 w-full md:w-[420px]">
                    {val.body}
                  </p>
                </div>
              </div>
            </>
          ))}
          <div className="mt-14">
            <button className="bg-sky-500 flex flex-row justify-center items-center hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
              <span className="inline-block mr-2">View All Pets Sitters</span>
              <FiArrowRightCircle className="inline-block text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitter;
