import { setModal } from "@/app/redux/fetures/filter/filterSlice";
import { useGetJobApiQuery } from "@/app/redux/service/api/jobApi";
import Loader from "@/app/utils/loader/Loader";
import Image from "next/image";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSend } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { useDispatch as UseDispatch } from "react-redux";
import Apply from "./apply";
import { useGetApplysApiQuery } from "@/app/redux/service/api/applyApi";

const JobDetails = ({ params }) => {
  const dispatch = UseDispatch();
  const isAuthenticated = JSON.parse(localStorage.getItem("email"));
  // get single data
  const { isError, isLoading, isSuccess, data } = useGetJobApiQuery(params);
  const jobData = data?.data;
  const { data: applyData } = useGetApplysApiQuery();
  const applyUser = applyData?.data
    ?.filter((apply) => apply.jobId === params)
    ?.filter((job) => job?.email === isAuthenticated)[0];
  // get new apply status
  const applyStatus = applyData?.data?.find(
    (apply) => apply.jobId === params && apply.status === true
  );
  // date update
  const date = new Date(jobData?.createdAt);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const localTime = date.toLocaleString(undefined, options);
  // implement data
  let content;

  if (isLoading && !isSuccess && !isError) {
    content = <Loader />;
  } else if (!isLoading && isSuccess && !isError) {
    content = (
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        {/* profile part  */}
        <div className="w-full h-auto flex flex-row flex-wrap justify-center md:justify-start items-center md:items-start">
          {/* left site  */}
          <div className="p-1 border-[1px] border-gray-400 rounded-md">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={jobData?.photoURL}
              width={320}
              height={290}
            />
          </div>
          {/* right site  */}
          <div className="ml-0 md:ml-5 mt-4 md:mt-0">
            <h1 className="text-gray-700 font-semibold text-xl md:text-3xl mb-1">
              {jobData?.title}
            </h1>
            <p className="text-gray-500 italic font-light text-sm">
              {jobData?.email}
            </p>
            <div className="my-4 flex flex-row justify-center md:justify-start items-center">
              <span className="text-gray-400 text-md">{jobData?.jobType}</span>
              <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-3"></span>
              <span className="text-gray-400 text-md inline-block">
                Dog Walker
              </span>
            </div>
            {/* address and post time  */}
            <div className="w-full h-auto flex flex-col justify-start items-start">
              {/* location  */}
              <div className="flex flex-row justify-center items-center">
                <span className="text-gray-400">
                  <MdLocationPin />
                </span>
                <span className="text-gray-400 text-sm font-light ml-1  my-1 ">
                  Looking within 20 miles of{" "}
                  <span className="text-lime-500 hover:underline transition cursor-pointer">
                    {jobData?.location}
                  </span>
                </span>
              </div>
              {/* post  */}
              <div className="flex flex-row justify-center items-center mt-1">
                <span className="text-lg  text-gray-400">
                  <AiOutlineClockCircle />
                </span>
                <span className="text-gray-400 text-sm font-light ml-1">
                  Updated {localTime}.
                </span>
              </div>
            </div>
            {/* apply button  */}
            {jobData?.email !== isAuthenticated && (
              <div className="mt-4 md:mt-8 flex justify-center md:justify-start items-center">
                {applyStatus ? (
                  <div className="text-gray-500 text-sm">
                    {applyUser?.email === isAuthenticated ? (
                      <p>
                        <span className="text-base text-green-500">
                          Congratulation!
                        </span>{" "}
                        you are
                        <span className="text-base text-green-500">
                          {" "}
                          Hired
                        </span>{" "}
                        on this job!
                      </p>
                    ) : (
                      <p>already person hired on this job!</p>
                    )}
                  </div>
                ) : applyUser?.email === isAuthenticated ? (
                  <p className="text-gray-500 text-sm">
                    You are already Apply this job!
                  </p>
                ) : (
                  <button
                    disabled={!isAuthenticated}
                    onClick={() => dispatch(setModal(true))}
                    className="bg-lime-500 hover:bg-lime-600 disabled:bg-lime-300 text-white font-light py-2 px-4 rounded flex justify-center items-center"
                  >
                    <span>
                      <AiOutlineSend />
                    </span>
                    <span className="inline-block ml-2">Apply Here</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* description part  */}
        <div className="px-2 md:pr-10 text-sm my-8">
          <h1 className="text-xl font-semibold mb-4">Description</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{jobData?.description}</p>
        </div>
        {/* location part  */}
        <div className="w-full h-auto px-2 md:pr-6 text-sm my-8">
          <h1 className="text-xl font-semibold mb-2">Location</h1>
          <div className="p-1 border-[1px] border-gray-400 rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29197.34005481236!2d90.34552536648118!3d23.83041962475714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13737cf6959%3A0xf4b3c8e9c0e5a171!2z4KaX4KeL4Kay4Ka-4KaqIOCml-CnjeCmsOCmvuCmrg!5e0!3m2!1sbn!2sbd!4v1684047185823!5m2!1sbn!2sbd"
              className="w-full h-[300px] rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {jobData?.email === isAuthenticated && <Apply params={params} />}
        </div>
      </div>
    );
  } else if (!isLoading && !isSuccess && isError) {
    content = <p>Sorry Something Was Wrong!</p>;
  }
  return <>{content}</>;
};

export default JobDetails;
