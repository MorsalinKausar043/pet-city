import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { MdOutlineLocationOn } from "react-icons/md";

const page = () => {
  const jobs = [1,2,3,4,5];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col justify-center items-center -m-2">
            {/* search bar  */}
            <div className="p-2 md:w-2/3 w-full flex flex-row items-center flex-wrap gap-3">
              <div className="flex flex-grow">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  placeholder="All Pet Sitter"
                  name="all_sitter"
                />
              </div>
              <div className="flex flex-grow">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  placeholder="Any Location"
                  name="any location"
                />
              </div>
              <div className="flex flex-grow">
                <select
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  name="all_sitter"
                >
                  <option value={false}>All Service</option>
                  <option value="pet sitter">Pet Sitter</option>
                  <option value="dog sitter">Dog Sitter</option>
                  <option value="cat sitter">Cat Sitter</option>
                </select>
              </div>
              <button className="bg-lime-500 flex justify-center items-center hover:bg-lime-600 text-white font-light py-2 px-4 rounded mr-0">
                <span>
                  <FcSearch />
                </span>
                <span className="inline-block ml-2">Search</span>
              </button>
            </div>
            {/* jobs data  */}
            <div className="p-2 md:w-2/3 w-full">
              {jobs.map((job) => (
                <Link key={job} href={`/job/${job}`}>
                  <div className="h-full my-4 flex justify-between flex-wrap items-center hover:border-lime-400 transition border-gray-200 border p-4 rounded-lg">
                    {/* left site  */}
                    <div className="flex flex-row justify-start items-center">
                      <div className="h-14 w-14 relative mr-4">
                        <Image
                          alt="team"
                          className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
                          src="/signUp_bg.jpg"
                          fill={true}
                        />
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          Sadman Sakib
                        </h2>
                        <p className="text-gray-500">Pet Sitter</p>
                      </div>
                    </div>
                    {/* middle site */}
                    <div className="mt-2 md:mt-0">
                      <h1 className="flex flex-row justify-center items-center text-sm font-light text-gray-400">
                        <span className="text-lime-400 text-lg font-semibold">
                          <MdOutlineLocationOn />
                        </span>
                        <span className="inline-block ml-1">
                          Agargaon, Dhaka
                        </span>
                      </h1>
                    </div>
                    {/* right site  */}
                    <div className="mt-2 md:mt-0">
                      <h1 className="flex flex-row justify-center items-center text-sm font-light text-gray-400">
                        <span>
                          <AiOutlineClockCircle />
                        </span>
                        <span className="inline-block ml-1">
                          Posted 1 day ago
                        </span>
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
