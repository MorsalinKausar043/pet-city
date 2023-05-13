import React from "react";

const SectionTitle = ({ title, body }) => {
  return (
    <>
      <div className="flex flex-row justify-around items-center w-full mb-12">
        <span className="extra_line relative w-full h-[1px] bg-gray-400"></span>
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
            {title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base uppercase text-gray-400">
            {body}
          </p>
        </div>
        <span className="extra_line2 relative w-full h-[1px] bg-gray-400 "></span>
      </div>
    </>
  );
};

export default SectionTitle;
