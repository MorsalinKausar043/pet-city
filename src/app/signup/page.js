"use client";

import { useState as UseState } from "react";
import { signUpUser } from "../redux/fetures/Auth/authSlice";
import {
  useSelector as UseSelector,
  useDispatch as UseDispatch,
} from "react-redux";

const page = () => {
  const [name, setName] = UseState("");
  const [email, setEmail] = UseState("");
  const [password, setPassword] = UseState("");
  const dispatch = UseDispatch();
  // submit form data
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };
  // get user
  const { isLoading } = UseSelector((state) => state.user);
  return (
    <>
      <main
        className={`w-full flex flex-col justify-center items-center signUp_page`}
      >
        <div className="container text-gray-600 px-5 py-24 md:py-40">
          <form
            onSubmit={handleLoginSubmit}
            className="w-full lg:w-2/6 md:w-1/2 bg-gray-100 bg-opacity-20 drop-shadow-lg shadow-gray-300/50 rounded-lg p-8 mx-auto flex flex-col mt-10 md:mt-0"
          >
            <h2 className="text-gray-100 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                User Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                User Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                User Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg"
            >
              Sign Up
            </button>
            <p className="text-xs text-gray-200 mt-3">
              Literally you probably {"haven't"} heard of them jean shorts.
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default page;
