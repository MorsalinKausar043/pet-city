import React from "react";
import RecentPost from "../footer/RecentPost";

const AnotherJobs = () => {
  return (
    <>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 md:border-l-[1px] border-gray-200 py-4 px-2 md:px-6">
        {/* title  */}
        <h1 className="text-lg text-gray-600 font-semibold mb-4">Pet Sitting Jobs</h1>
        {/* data  */}
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </div>
    </>
  );
};

export default AnotherJobs;
