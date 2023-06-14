"use client";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <main>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
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
