"use client";
import React from "react";
import OwnerSitter from "./components/home/OwnerSitter";
import MainFeatures from "./components/home/mainfeatures/mainFeatures";
import Listing from "./components/Listings/listing";
import Review from "./components/review/Review";
import HeroArea from "./components/home/heroarea/heroArea";
import { useEffect as UseEffect } from "react";
import { useDispatch as UseDispatch } from "react-redux";
import { saveUser, toggleState } from "./redux/fetures/Auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./firebase/firebase.init";
// tab title
export const metadata = {
  title: "Pet-City | Home",
  description: "Generated by create next app",
};

const page = () => {
  const dispatch = UseDispatch();
  UseEffect(() => {
    // auto dispatch login when user login firebase
    const unsubscribed = onAuthStateChanged(Auth, (user) => {
      if (user) {
        dispatch(saveUser(user.email));
      } else {
        dispatch(toggleState());
      }
    });

    return () => unsubscribed;
  }, [dispatch]);
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
