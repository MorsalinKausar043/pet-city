"use client"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { MdLocationPin } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

const SliderSwiper = () => {
    const sliderImage = [
      {
        id: 1,
        img: "https://i.ibb.co/ncrXc2V/1.png",
        user: "morsalin kausar",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid minus vitae harum facilis fuga?",
        type: "cat sitter",
      },
      {
        id: 2,
        img: "https://i.ibb.co/B3s7v4h/2.png",
        user: "jakir islam jakir",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid minus vitae harum facilis fuga?",
        type: "cat sitter",
      },
      {
        id: 3,
        img: "https://i.ibb.co/XXR8kzF/3.png",
        user: "ayub ali",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid minus vitae harum facilis fuga?",
        type: "cat sitter",
      },
      {
        id: 4,
        img: "https://i.ibb.co/yg7BSdM/4.png",
        user: "afridi sayeed",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid minus vitae harum facilis fuga?",
        type: "cat sitter",
      },
    ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sliderImage.map((val) => (
          // <div className="w-full h-auto" key={val.id}>
          <>
            <SwiperSlide key={val.id}>
              <Image
                key={val.id}
                style={{ objectFit: "cover" }}
                src={val.img}
                width={350}
                height={220}
                alt="featured-slider-image"
                className="rounded-md"
              />
              <div className="w-full h-[28%] absolute bottom-0 left-0 bg-zinc-500 opacity-90 capitalize px-3 py-2 rounded-bl-md rounded-br-md">
                <h1 className="text-gray-200 font-semibold text-md">
                  {val.user}
                </h1>
                <p className="text-gray-300 font-light text-xs">
                  {val.body.slice(0, 100)}...
                </p>
                <span className="text-gray-300 text-sm my-[2px]">
                  {val.type}
                </span>
                {/* address and post time  */}
                <div className="w-full h-auto flex flex-row justify-start items-center">
                  {/* location  */}
                  <div className="flex flex-row justify-center items-center mr-2">
                    <span className="text-gray-100">
                      <MdLocationPin />
                    </span>
                    <span className="text-lime-400 text-sm  ml-1 hover:underline transition my-1 cursor-pointer">
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  {/* post  */}
                  <div className="flex flex-row justify-center items-center">
                    <span className="text-lg  text-gray-100">
                      <BiLogIn />
                    </span>
                    <span className="text-gray-400 text-sm t ml-1">
                      Posted 3 days ago
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default SliderSwiper;
