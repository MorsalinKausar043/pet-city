"use client";
import { useRouter as UseRouter } from "next/navigation";
import { useEffect as UseEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = UseRouter();
  console.log(router)

  UseEffect(() => {
    // Check if the user is authenticated or authorized
    const isAuthenticated = JSON.parse(localStorage.getItem("email")); // your authentication logic here

    if (!isAuthenticated) {
       router.push(`/signin`);// Redirect to login page if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
