import React from "react";
import Navbar from "./components/navbar/navbar";
import OwnerSitter from "./components/home/OwnerSitter";
import MainFeatures from "./components/home/mainfeatures/mainFeatures";
import Listing from "./components/Listings/listing";
import Review from "./components/review/Review";
import HeroArea from "./components/home/heroarea/heroArea";

const page = () => {
  return (
    <>
      <main>
        {/* hero area part  */}
        <HeroArea />
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
