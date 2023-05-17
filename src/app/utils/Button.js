import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-lime-500 text-white drop-shadow-md py-2 px-6 rounded md:ml-8 hover:bg-lime-600 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
