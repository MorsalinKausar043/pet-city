import SectionTitle from "@/app/utils/sectionTitle";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { AiFillHeart, AiFillLike } from "react-icons/ai";
import { BiBulb } from "react-icons/bi";
import Style from "../../style/features.module.css";

const MainFeatures = () => {
  const featuresData = [
    {
      id: 1,
      icons: <HiChatBubbleLeftRight />,
      title: "Great Communication",
      body: "Communicate with your pet sitter first and then offer",
    },
    {
      id: 2,
      icons: <AiFillHeart />,
      title: "Easy to Use",
      body: "Proin gravida nibh vel velit auctor aliquet. Aenean tempor auctor sollicit.",
    },
    {
      id: 3,
      icons: <BiBulb />,
      title: "Our Tips",
      body: "Proin gravida nibh vel velit auctor aliquet. Aenean tempor auctor sollicit.",
    },
    {
      id: 4,
      icons: <AiFillLike />,
      title: "Lots of Choice",
      body: "Proin gravida nibh vel velit auctor aliquet. Aenean tempor auctor sollicit.",
    },
  ];
  return (
    <main
      className={`bg-[#f3f3f3] w-full h-full flex flex-col justify-center items-center`}
    >
      <section className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
        {/* title  */}
        <SectionTitle title="WHY CHOOSE US" body="Main Features" />
        <div className="flex flex-wrap -m-4 text-center">
          {featuresData.map((val) => (
            <div key={val.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              {/* icon  */}
              <div className="px-4 py-6 flex justify-center items-center flex-col">
                <div
                  className={`${Style.features_icon} p-4 border-[2px] border-lime-400 bg:white hover:bg-lime-500 transition rounded-full mb-6 cursor-pointer`}
                >
                  <span className={`${Style.icon} text-lime-400 text-5xl`}>
                    {val.icons}
                  </span>
                </div>
                {/* body  */}
                <div>
                  <h2 className="title-font font-medium text-xl text-gray-500">
                    {val.title}
                  </h2>
                  <p className="leading-relaxed text-md font-normal mt-2 text-gray-400">
                    {val.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainFeatures;
