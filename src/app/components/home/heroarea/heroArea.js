import React from "react";
import InputBox from "./inputBox";
import Sliders from "./Sliders";

const HeroArea = () => {
  return (
    <>
      <main
        className={`hero_area w-full h-auto flex flex-col justify-center items-center backdrop-blur-sm`}
      >
        <section className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto ">
          <div className="p-1 rounded-md shadow-xl shadow-lime-400/20 border-[2px] border-lime-400 overflow-hidden">
            <div class="text-gray-600 body-font relative ">
              {/* slider part  */}
              <Sliders />
              {/* input box part */}
              <InputBox />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroArea;
