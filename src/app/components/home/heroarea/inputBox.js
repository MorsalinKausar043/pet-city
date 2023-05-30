import React from 'react'

const InputBox = () => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-2/6 md:w-2/3 bg-zinc-600 opacity-90 rounded-lg px-8 py-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-white text-2xl md:text-3xl mb-3 font-medium title-font">
            Find an Awesome Pet Sitter Near You
          </h2>
          {/* name part  */}
          <div className="relative my-2">
            <input
              type="text"
              name="name"
              placeholder="Pet Breed"
              className="w-full bg-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* name part  */}
          <div className="relative my-2">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full bg-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* name part  */}
          <div className="relative my-2">
            <select
              type="text"
              name="service"
              className="w-full bg-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none text-gray-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="">Service Type</option>
              <option value="">Bird Sitter</option>
              <option value="">Dog Sitter</option>
              <option value="">Cat Sitter</option>
              <option value="">Fish Sitter</option>
            </select>
          </div>
          <button className="text-white bg-lime-500 border-0 mt-2 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default InputBox
