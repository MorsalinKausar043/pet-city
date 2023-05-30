import React from "react";
import RecentPost from "../footer/RecentPost";
import Link from "next/link";

const AnotherJobs = () => {
  const jobs = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 md:border-l-[1px] border-gray-200 py-4 px-2 md:px-6">
        {/* title  */}
        <h1 className="text-lg text-gray-600 font-semibold mb-4">
          Pet Sitting Jobs
        </h1>
        {/* body  */}
        {jobs.map((job) => (
          <Link key={job} href={`/job/${job}`}>
            <div className="w-full md:w-80 lg:w-96 flex flex-col justify-center md:justify-start items-center md:items-start py-3 border-b-[.2px] border-gray-200">
              {/* title  */}
              <h1 className="text-sm text-gray-600 font-normal ">
                Pet sitter needed for one dog
              </h1>
              <div className="flex flex-row justify-start items-center mt-1">
                <h1 className="text-xs font-light">London, UK</h1>
                <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-2"></span>
                <span className="text-xs font-light text-gray-400 text-md">
                  Sakib
                </span>
                <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-2"></span>
                <span className="text-xs font-light text-lime-400 text-md inline-block">
                  Pet Sitter
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AnotherJobs;
