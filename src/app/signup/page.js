"use client";

import { useState as UseState, useEffect as UseEffect } from "react";
import { signUpUser } from "../redux/fetures/Auth/authSlice";
import {
  useSelector as UseSelector,
  useDispatch as UseDispatch,
} from "react-redux";
import PublicRoute from "../utils/privateRoute/publicRoute";
import { useRouter as UseRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  // get user
  const { isLoading, isSuccess } = UseSelector((state) => state.user);
  const router = UseRouter();
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
  const isAuthenticated = JSON.parse(localStorage.getItem("email")); //
  UseEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  return (
    <>
      <PublicRoute>
        {" "}
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
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-200"
                  >
                    you agree to our term and policy
                  </label>
                </div>
                <Link href="/signin">
                  <span className="text-sm text-gray-200 ">signin now!</span>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </PublicRoute>
    </>
  );
};

export default page;
