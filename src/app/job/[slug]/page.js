"use client";

import React from "react";
import JobDetails from "@/app/components/job/jobDetails";
import AnotherJobs from "@/app/components/job/anotherJobs";


const page = ({ params }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-start ">
          {/* left site  */}
          <JobDetails />
          {/* right site  */}
          <AnotherJobs />
        </div>
      </section>
    </>
  );
};

export default page;
