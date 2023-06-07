"use client";
import "./globals.css";
import Providers from "./redux/app/provider";
import React, { useEffect as UseEffect, useState as UseState } from "react";
import Preloader from "./utils/preloader/Preloader";


export default function RootLayout({ children }) {
  const [loader, SetLoader] = UseState(true);

  UseEffect(() => {
    // work on preloader
    setTimeout(() => window.addEventListener("load", SetLoader(false)), 1000);
  }, [loader]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loader ? <Preloader /> : <Providers>{children}</Providers>}
      </body>
    </html>
  );
}
