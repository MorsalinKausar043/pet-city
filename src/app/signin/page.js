"use client";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = e => {
    e.preventDefault();
    
    alert("Data Submitted")
  }
  return (
    <>
      <main className="w-full">
        <section className="container px-2 md:px-24 lg:px-60 mx-auto py-10">
          <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
            <h1 className="text-lg font-bold text-gray-500 mb-5">Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <h4 className="text-sm text-gray-700 mb-2">Username or email address <span className="text-red-500">*</span></h4>
              <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your email here"
                />
              <h4 className="text-sm text-gray-700 mb-2">Password <span className="text-red-500">*</span></h4>
              <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your password here"
                />
              <button className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
                Login
              </button> 
              {/* <input 
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded"
                value="Login"
              /> */}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default page
