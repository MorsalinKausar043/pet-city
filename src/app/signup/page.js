"use client";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const handleLoginSubmit = e => {
    e.preventDefault();
    
    alert("Data Submitted")
  }
  return (
    <>
      <main className="w-full">
        <section className="container px-2 md:px-24 lg:px-60 mx-auto py-10">
          <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
            <h1 className="text-lg font-bold text-gray-500 mb-5">Register</h1>
            <form onSubmit={handleLoginSubmit}>
              <h4 className="text-sm text-gray-700 mb-2">Username or email address <span className="text-red-500">*</span></h4>
              <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your email here"
                />
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 lg:gap-2">
                  <div className="w-full">
                      <h4 className="text-sm text-gray-700 mb-2">Password <span className="text-red-500">*</span></h4>
                      <input
                          type="password"
                          required
                          onChange={(e) => setPasswordOne(e.target.value)}
                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                          placeholder="Enter your password here"
                        />
                  </div>
                  <div className="w-full">
                      <h4 className="text-sm text-gray-700 mb-2">Re-enter Password <span className="text-red-500">*</span></h4>
                      <input
                          type="password"
                          required
                          onChange={(e) => setPasswordTwo(e.target.value)}
                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                          placeholder="Enter your password here"
                        />
                  </div>
              </div>
              <button className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
              Register
              </button> 
              {/* <input 
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded"
                value="Register"
              /> */}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default page
