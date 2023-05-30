"use client";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const Providers = ({ children }) => {
  return (
      <main>
        <Provider store={store}>
          <section>
            <Navbar />
          </section>
          <section>{children}</section>
          <section>
            <Footer />
          </section>
        </Provider>
      </main>
  );
};

export default Providers;
