import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sticky z-10 bottom-0 footer p-3 flex justify-evenly items-center border-t-2 border-gray-500">
    
      <h1 className=" text-xs">
        Jaypee University of Engineering and Technology
      </h1>
      <Link to={"/"}>
        <span className="text-red-500 font-bold text-xs">
          Agricultural <span className="text-white">Supply Chain</span>
        </span>
      </Link>
    </div>
  );
};

export default Footer;
