"use client";
import React from "react";
import Link from "next/link";
import { MdPeopleAlt } from "react-icons/md";
import { useGetJobsApiQuery } from "@/app/redux/service/api/jobApi";
import { useGetApplysApiQuery } from "@/app/redux/service/api/applyApi";

const AnotherJobs = ({ params }) => {
  const { isError, isLoading, isSuccess, data } = useGetJobsApiQuery();
  const { data: applyData } = useGetApplysApiQuery();
  const applyUser = applyData?.data?.filter((apply) => apply.jobId === params);
  const jobData = data?.data
    ?.slice()
    ?.filter((job) => job._id !== params)
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 6);
  let content;

  if (isLoading && !isSuccess && !isError) {
    content = <p>loading...</p>;
  } else if (!isLoading && isSuccess && !isError) {
    if (jobData?.length < 1) {
      content = <p>Jobs Not Available</p>;
    } else {
      content = jobData?.map(({ _id, title, jobType, location, createdAt }) => (
        <Link key={_id} href={`/job/${_id}`}>
          <div className="w-full md:w-80 lg:w-96 flex flex-col justify-center md:justify-start items-center md:items-start py-3 border-b-[.2px] border-gray-200">
            {/* title  */}
            <h1 className="text-sm text-gray-600 font-normal ">{title}</h1>
            <div className="flex flex-row justify-start items-center mt-1">
              <h1 className="text-xs font-light">{location}</h1>
              <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-2"></span>
              <span className="text-xs font-light text-gray-400 text-md">
                {createdAt.slice(0, 10)}
              </span>
              <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-2"></span>
              <span className="text-xs font-light text-lime-400 text-md inline-block">
                {jobType}
              </span>
            </div>
          </div>
        </Link>
      ));
    }
  } else if (!isLoading && !isSuccess && isError) {
    content = <p>Sorry Something Was Wrong!</p>;
  }

  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 md:border-l-[1px] border-gray-200 py-4 px-2 md:px-6">
        {/* title  */}
        <h1 className="text-lg text-gray-600 font-semibold mb-4">
          Pet Sitting Jobs
        </h1>
        {/* body  */}
        {content}
        {applyUser?.length > 0 && (
          <div className=" mt-4 flex flex-row justify-start items-center">
            <span>
              <MdPeopleAlt />
            </span>
            <p className="text-md text-gray-600 font-semibold ml-2">
              {applyUser?.length} {applyUser.length > 1 ? "persons" : "person"}{" "}
              apply this job!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AnotherJobs;
