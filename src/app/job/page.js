"use client";
import React, { useState as UseState } from "react";
import { FcSearch } from "react-icons/fc";
import Jobs from "../components/job/Jobs";
import { useDispatch as UseDispatch } from "react-redux";
import { filteringJOb } from "../redux/fetures/filter/filterSlice";

const page = () => {
  const dispatch = UseDispatch();
  const [formData, setFormData] = UseState({
    title: "",
    location: "",
    type: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filteringJOb(formData));
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col justify-center items-center -m-2">
            {/* search bar  */}
            <form
              onSubmit={handleSubmit}
              className="p-2 md:w-2/3 w-full flex flex-row items-center flex-wrap gap-3"
            >
              <div className="flex flex-grow">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  placeholder="All Pet Sitter"
                  name="title"
                  onChange={handleInput}
                  value={formData.title}
                />
              </div>
              <div className="flex flex-grow">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  placeholder="Any Location"
                  name="location"
                  onChange={handleInput}
                  value={formData.location}
                />
              </div>
              <div className="flex flex-grow">
                <select
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  name="type"
                  onChange={handleInput}
                  value={formData.type}
                >
                  <option value={false}>All Service</option>
                  <option value="pet sitter">Pet Sitter</option>
                  <option value="dog sitter">Dog Sitter</option>
                  <option value="cat sitter">Cat Sitter</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-lime-500 flex justify-center items-center hover:bg-lime-600 text-white font-light py-2 px-4 rounded mr-0"
              >
                <span>
                  <FcSearch />
                </span>
                <span className="inline-block ml-2">Search</span>
              </button>
            </form>
            {/* jobs data  */}
            <div className="p-2 md:w-2/3 w-full">
              <Jobs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
