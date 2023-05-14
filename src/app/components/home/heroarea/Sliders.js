"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const Sliders = () => {
    const sliderData = [
      {
        id: 1,
        img: "https://i.ibb.co/b5QW0L2/Understanding-Your-Cat-s-Body-Language-HERO.jpg",
      },
      {
        id: 2,
        img: "https://i.ibb.co/c6xtWQk/dog-day1.jpg",
      },
      {
        id: 3,
        img: "https://i.ibb.co/173N039/Tufted-Titmouse-62126-Jenny-Burdette-GA2019-Overall1-e1573593877167.jpg",
      },
    ];
  return (
    <>
      <div class="absolute w-full h-full inset-0 rounded-md pb-2">
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {sliderData.map((val) => (
            <SwiperSlide key={val.id}>
              <div className="relative h-screen  w-full">
                <Image
                  src={val.img}
                  alt="petcity-image"
                  width={1000}
                  height={1000}
                  className="nextimg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
