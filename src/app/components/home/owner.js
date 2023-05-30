import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import style from "../style/ownersitter.module.css";
import Link from "next/link";

const Owner = () => {
  const data = [
    {
      id: 1,
      title: "Find Your Perfect Pet Sitter",
      body: "You can find the best pet sitter near you with enough experience of your pet!",
      icon: <BsSearch />,
    },
    {
      id: 2,
      title: "Find Your Perfect Pet Sitter",
      body: "Contact your favourite and nearest pet sitter at your choice and let them handle your pet while your absence.",
      icon: <FaIdCard />,
    },
    {
      id: 3,
      title: "Find Your Perfect Pet Sitter",
      body: "You don't need to worry about your pet, all the pet sitters here are very experienced and skillful here",
      icon: <MdDone />,
    },
  ];
  return (
    <>
      <div className="flex justify-around items-center flex-wrap border-b-[.5px] border-gray-300 pb-14">
        {/* left site  */}
        <div
          className={`${style.owner_img_box} relative flex justify-center items-center`}
        >
          <Image
            src="/po1.png"
            width={544}
            height={300}
            alt="Owner-image"
            className={`cursor-pointer`}
          />
        </div>
        {/* right site  */}
        <div className="mt-8 md:mt-0">
          <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600">
            Find Pet Owners
          </h1>

          {data.map((val) => (
            <div
              key={val.id}
              className="w-full h-full flex flex-row justify-center items-center mt-12"
            >
              {/* left  */}
              <div
                className={`p-4 border-[3px] border-lime-500 hover:bg-lime-500 transition rounded-full ${style.icon_box}`}
              >
                <span
                  className={`${style.icon} block text-lime-500 hover:text-white text-2xl font-extrabold`}
                >
                  {val.icon}
                </span>
              </div>
              {/* right  */}
              <div className="ml-6 flex flex-col justify-start items-start">
                <h1 className="text-xl mb-4 text-gray-600">{val.title}</h1>
                <p className="text-sm text-gray-500 w-full md:w-[420px]">
                  {val.body}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-14">
            <Link href="/job">
              <button className="bg-lime-500 flex flex-row justify-center items-center hover:bg-lime-600 shadow-lg shadow-lime-200/10 text-white font-semibold py-3 px-6 border-b-4 border-lime-700 hover:border-lime-700 rounded">
                <span className="inline-block mr-2">View All Pets Sitters</span>
                <FiArrowRightCircle className="inline-block text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
