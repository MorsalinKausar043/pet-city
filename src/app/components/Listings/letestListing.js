import React from 'react'
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

const LatestListing = () => {
    const listingData = [
      {
        id: 1,
        src: "",
        user: "Morsalin Kausar",
        body: "Hi, I have a 7 years of expereience of having a Percian Cat.",
        type: "",
        location: "",
        time: "",
      },
      {
        id: 2,
        src: "",
        user: "Jihad Islam",
        body: "am a professional Dog Sitter with having 5 Years of Experience.",
        type: "",
        location: "",
        time: "",
      },
      {
        id: 3,
        src: "",
        user: "Saayed Afridi",
        body: "I started to adopt birds when I was small!",
        type: "",
        location: "",
        time: "",
      },
      {
        id: 4,
        src: "",
        user: "Programming Hero",
        body: "I have 15 Years of Expereince of training pets specially Dogs.",
        type: "",
        location: "",
        time: "",
      },
    ];
  return (
    <>
      <div className="w-full h-auto flex justify-center  md:justify-between items-center flex-wrap">
        {/* first  */}
        {listingData.map((val) => (
          <div
            key={val.id}
            className="w-44 mt-2 hover:scale-105 transition mr-2 md:mr-0 box-border bg-white border-2 border-white p-1 rounded-md shadow-lg shadow-gray-300/80"
          >
            {/* image  */}
            <div className="mb-2">
              <Image
                src="https://i.ibb.co/SRbzwD7/successful-child-with-graduation-cap-backpack-full-books.jpg"
                alt="latest-post-image"
                width={200}
                height={240}
              />
            </div>
            {/* body */}
            <div className="text-center pb-4">
              <h1 className="text-md font-semibold text-gray-600">
                {val.user}
              </h1>
              <p className="text-xs font-light text-gray-400">{val.body}</p>
              <span className="block border-[.5px] border-gray-300 my-2"></span>
              <span className="inline-block text-xs font-light text-gray-500">
                Dog Sitter
              </span>
              {/* location  */}
              <div className="flex flex-row justify-center items-center">
                <span className="text-gray-600">
                  <MdLocationPin />
                </span>
                <span className="text-lime-400 text-xs font-light ml-2 hover:underline transition my-2 cursor-pointer">
                  Dhanmondi, Dhaka
                </span>
              </div>
              {/* post  */}
              <div className="flex flex-row justify-center items-center">
                <span className="text-lg  text-gray-600">
                  <BiLogIn />
                </span>
                <span className="text-gray-400 text-xs font-light ml-2">
                  Posted 3 days ago
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestListing;
