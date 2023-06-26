"use client";

import React from "react";
import JobDetails from "@/app/components/job/jobDetails";
import AnotherJobs from "@/app/components/job/anotherJobs";
import Modal from "@/app/components/modal/Modal";
import { useSelector as UseSelector } from "react-redux";

const page = ({ params:{slug} }) => {
  const { modal } = UseSelector((state) => state.filter);
  return (
    <>
      <section className="text-gray-600 body-font relative">
        {modal && (
          <div className="absolute w-full h-full inset-0 flex items-start mt-20 justify-center">
            <Modal params={slug}/>
          </div>
        )}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-start ">
          {/* left site  */}
          <JobDetails params={slug} />
          {/* right site  */}
          <AnotherJobs params={slug} />
        </div>
      </section>
    </>
  );
};

export default page;
