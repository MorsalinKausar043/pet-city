"use client";
import { useGetJobsApiQuery } from "@/app/redux/service/api/jobApi";
import Loader from "@/app/utils/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Jobs = () => {
  const { isError, isLoading, isSuccess, data } = useGetJobsApiQuery();
  const jobData = data?.data
    ?.slice()
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  let content;

  if (isLoading && !isSuccess && !isError) {
    content = <Loader />;
  } else if (!isLoading && isSuccess && !isError) {
    if (jobData?.length < 1) {
      content = <Loader />;
    } else {
      content = jobData?.map(
        ({ _id, photoURL, title, jobType, location, createdAt }) => (
          <Link key={_id} href={`/job/${_id}`}>
            <div className="h-full my-4 flex justify-between flex-wrap items-center hover:border-lime-400 transition border-gray-200 border p-4 rounded-lg">
              {/* left site  */}
              <div className="flex flex-row justify-start items-center">
                <div className="h-14 w-14 relative mr-4">
                  <Image
                    alt="team"
                    className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
                    src={photoURL}
                    fill={true}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font capitalize font-medium">
                    {title.slice(0, 15)}..
                  </h2>
                  <p className="text-gray-500">{jobType}</p>
                </div>
              </div>
              {/* middle site */}
              <div className="mt-2 md:mt-0">
                <h1 className="flex flex-row justify-center items-center text-sm font-light text-gray-400">
                  <span className="text-lime-400 text-lg font-semibold">
                    <MdOutlineLocationOn />
                  </span>
                  <span className="inline-block ml-1">{location}</span>
                </h1>
              </div>
              {/* right site  */}
              <div className="mt-2 md:mt-0">
                <h1 className="flex flex-row justify-center items-center text-sm font-light text-gray-400">
                  <span>
                    <AiOutlineClockCircle />
                  </span>
                  <span className="inline-block ml-1">
                    Posted {createdAt.slice(0, 10)}
                  </span>
                </h1>
              </div>
            </div>
          </Link>
        )
      );
    }
  } else if (!isLoading && !isSuccess && isError) {
    content = <p>Sorry Something Was Wrong!</p>;
  }

  return <>{content}</>;
};

export default Jobs;
