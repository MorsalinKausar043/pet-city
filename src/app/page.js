import React from "react";
import Navbar from "./components/navbar/navbar";
import OwnerSitter from "./components/home/OwnerSitter";
import MainFeatures from "./components/home/mainfeatures/mainFeatures";
import Listing from "./components/Listings/listing";
import Review from "./components/review/Review";

const page = () => {
  return (
    <>
      <main>
        <div className="w-full h-full flex justify-center items-center">
          <h1>hello world this is Pet-City!</h1>
        </div>
        {/* listings part  */}
          <Listing />
        {/* owner and sitter function  */}
          <OwnerSitter />
        {/* main features showing part  */}
          <MainFeatures />
        {/* clients comment features showing part  */}
          <Review />
      </main>
    </>
  );
};

export default page;
