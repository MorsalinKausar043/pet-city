import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const FeaturedListing = () => {
  const sliderImage = [
    { id: 1, img: "https://i.ibb.co/ncrXc2V/1.png", user: "morsalin" },
    { id: 2, img: "https://i.ibb.co/B3s7v4h/2.png", user: "jakir" },
    { id: 3, img: "https://i.ibb.co/XXR8kzF/3.png", user: "ayub" },
    { id: 4, img: "https://i.ibb.co/yg7BSdM/4.png", user: "afridi" },
  ];
  return (
    <>
      <div className="w-full h-full relative">
        <Slider autoSlide={true}>
          {sliderImage.map((val) => (
            // <div className="w-full h-auto" key={val.id}>
            <>
              <Image
                key={val.id}
                src={val.img}
                width={350}
                height={200}
                alt="featured-slider-image"
              />
              <div className="w-full h-20 absolute top-0 left-0 bg-red-700 p-7">
                <h1>{val.user}</h1>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FeaturedListing;
