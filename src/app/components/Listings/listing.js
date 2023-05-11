import Image from "next/image";
import React from "react";
import {MdLocationPin} from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

const Listing = () => {
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
      <main className="bg-gray-100 w-full h-full flex flex-col justify-center items-center">
        <section class="container mx-auto flex px-2 md:px-10 lg:px-20 py-12 md:flex-row flex-col items-center">
          {/* left site  */}
          <div class="md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="w-full h-auto flex justify-center  md:justify-between items-center flex-wrap">
              {/* first  */}
              {listingData.map((val) => (
                <div
                  key={val.id}
                  className="w-44 mt-2 mr-2 md:mr-0 box-border bg-white border-2 border-white p-1 rounded-md shadow-lg shadow-gray-300/80"
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
                    <p className="text-xs font-light text-gray-400">
                      {val.body}
                    </p>
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
          </div>
          {/* right site  */}
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              width={720}
              height={600}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Listing;
