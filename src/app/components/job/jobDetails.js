import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSend } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const JobDetails = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        {/* profile part  */}
        <div className="w-full h-auto flex flex-row flex-wrap justify-center md:justify-start items-center md:items-start">
          {/* left site  */}
          <div className="p-1 border-[1px] border-gray-400 rounded-md">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/login_bg.jpg"
              //   src="https://dummyimage.com/720x600"
              width={320}
              height={290}
            />
          </div>
          {/* right site  */}
          <div className="ml-0 md:ml-5 mt-4 md:mt-0">
            <h1 className="text-gray-700 font-semibold text-xl md:text-3xl mb-1">
              Morsalin Kausar
            </h1>
            <p className="text-gray-500 italic font-light text-sm">
              Please write a few words about your job/service
            </p>
            <div className="my-4 flex flex-row justify-center md:justify-start items-center">
              <span className="text-gray-400 text-md">Cat Sitter</span>
              <span className="text-gray-400 w-[3px] h-[3px] rounded-full bg-slate-400 inline-block mx-3"></span>
              <span className="text-gray-400 text-md inline-block">
                Dog Walker
              </span>
            </div>
            {/* address and post time  */}
            <div className="w-full h-auto flex flex-col justify-start items-start">
              {/* location  */}
              <div className="flex flex-row justify-center items-center">
                <span className="text-gray-400">
                  <MdLocationPin />
                </span>
                <span className="text-gray-400 text-sm font-light ml-1  my-1 ">
                  Looking within 20 miles of{" "}
                  <span className="text-lime-500 hover:underline transition cursor-pointer">
                    Mirpur, Dhaka
                  </span>
                </span>
              </div>
              {/* post  */}
              <div className="flex flex-row justify-center items-center mt-1">
                <span className="text-lg  text-gray-400">
                  <AiOutlineClockCircle />
                </span>
                <span className="text-gray-400 text-sm font-light ml-1">
                  Updated 4 minutes ago.
                </span>
              </div>
            </div>
            {/* apply button  */}
            <div className="mt-4 md:mt-8 flex justify-center md:justify-start items-center">
              <Link href="/">
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-light py-2 px-4 rounded flex justify-center items-center">
                  <span>
                    <AiOutlineSend />
                  </span>
                  <span className="inline-block ml-2">Apply Here</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* description part  */}
        <div className="px-2 md:pr-6 text-sm my-8">
          <h1 className="text-xl font-semibold mb-2">Description</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur architecto sit eos. Nostrum libero facilis fuga quas
            maiores, iure asperiores?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quasi, facilis recusandae excepturi dolorum nisi, labore aspernatur
            magni fugit beatae eveniet consequatur inventore. Ipsum esse quidem
            blanditiis pariatur perferendis sed debitis molestiae quos, beatae
            earum voluptas nemo neque saepe facere?
          </p>
        </div>
        {/* location part  */}
        <div className="w-full h-auto px-2 md:pr-6 text-sm my-8">
          <h1 className="text-xl font-semibold mb-2">Location</h1>
          <div className="p-1 border-[1px] border-gray-400 rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29197.34005481236!2d90.34552536648118!3d23.83041962475714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13737cf6959%3A0xf4b3c8e9c0e5a171!2z4KaX4KeL4Kay4Ka-4KaqIOCml-CnjeCmsOCmvuCmrg!5e0!3m2!1sbn!2sbd!4v1684047185823!5m2!1sbn!2sbd"
              className="w-full h-[300px] rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
