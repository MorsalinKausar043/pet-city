import Link from "next/link";
import React from "react";
import RecentPost from "./RecentPost";
import FooterBottom from "./footerB";

const Footer = () => {
  const informationLinks = [
    { id: 1, title: "FAQ's", href: "faq" },
    { id: 2, title: "Press", href: "press" },
    { id: 3, title: "Testimonial", href: "testimonial" },
    { id: 4, title: "About Us", href: "about" },
    { id: 5, title: "Expert Advice", href: "expert-advice" },
    { id: 6, title: "Contact Us", href: "contact" },
  ];
  const categoriesLIns = [
    { id: 1, title: "Pet Care", href: "pet-care" },
    { id: 2, title: "Pet Sitters", href: "pet-sitters" },
    { id: 3, title: "Dog Walkers", href: "dog-walkers" },
    { id: 4, title: "Pet Care Jobs", href: "pet-care-jobs" },
    { id: 5, title: "Pet Care Costs", href: "pet-care-costs" },
  ];

  return (
    <>
      <main className="bg-zinc-600 w-full h-full flex flex-col justify-center items-center">
        <section className="px-2 md:px-10 lg:px-20 container grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 py-10 mx-auto">
          {/* information part  */}
          <div className="col-span-1">
            <h1 className="text-gray-300">INFORMATION</h1>
            <ul className="mt-6">
              {informationLinks?.map((val) => (
                <li
                  key={val.id}
                  className="mt-4 text-gray-400 text-sm font-light pb-2 border-b-[1px] border-gray-500"
                >
                  <Link href="/">
                    <span className="text-md">{">"}</span>
                    <span className="ml-2 hover:text-lime-500 bg hover:underline transition">
                      {val?.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* CATEGORIES part  */}
          <div className="col-span-1">
            <h1 className="text-gray-300">CATEGORIES</h1>
            <ul className="mt-6">
              {categoriesLIns?.map((val) => (
                <li
                  key={val.id}
                  className="mt-4 text-gray-400 text-sm font-light pb-2 border-b-[1px] border-gray-500"
                >
                  <Link href="/">
                    <span className="text-md">{">"}</span>
                    <span className="ml-2 hover:text-lime-500 bg hover:underline transition">
                      {val?.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* RECENT POSTS part  */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-gray-300">RECENT POSTS</h1>
            {/* recent post data  */}
            <div className="mt-6">
              {/* recent post data  */}
              <RecentPost />
            </div>
          </div>
          {/* GET OUR NEWSLETTER part  */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-gray-300">GET OUR NEWSLETTER</h1>
            <p className="text-gray-400 py-4 text-sm font-light">
              Nulla tincidunt sollicitudin tristique. Sed sed metus malesuada,
              semper dolor sit amet, eleifend libero.
            </p>
            {/* input field  */}
            <div className="flex flex-row">
              <input
                type="text"
                className="py-3 px-4 block w-full bg-gray-700 outline-none border-gray-200 rounded-md text-sm focus:outline-lime-500 focus:ring-lime-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Enter your email here"
              />
              <button className="bg-lime-500 hover:bg-lime-600 transition text-white py-2 px-4 rounded ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <section className="bg-zinc-700 w-full h-auto px-2 md:px-10 lg:px-20 py-4 flex justify-center items-end ">
          <FooterBottom/>
        </section>
      </main>
    </>
  );
};

export default Footer;
