import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Appstate } from "../App";
import Dropdown from "./Dropdown";

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className="sticky z-10 top-0 header text-xs md:text-3xl flex justify-between text-red-500 font-bold p-3 items-center border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Agricultural <span className="text-white">Supply Chain</span>
        </span>
      </Link>

      <Link to={"/"} className=" text-xs md:text-2xl text-blue-600">
        Home
      </Link>
      <Link to={"/team"} className="text-xs md:text-2xl text-blue-600">
        Team
      </Link>
      <Link to={"/contact"} className="text-xs md:text-2xl text-blue-600">
        Contact
      </Link>
      <Dropdown />
      <Link to={"/reviews"} className=" text-xs md:text-2xl text-blue-600">
      Tell us
      </Link>

      {useAppstate.login ? (
        
        <Link to={"/directory"}>
        <h1 className="text-lg bg-blue-800 hover:bg-violet-900 cursor-pointer flex items-center">
            <Link to={"/login"}><button className="mr-3 ml-3">
              <span className="text-white font-medium capitalize">Logout</span>
            </button></Link>
          </h1>
          </Link> 
        
         

      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-blue-800 hover:bg-violet-900 cursor-pointer flex items-center">
            <button className="mr-3 ml-3">
              <span className="text-white font-medium capitalize">Login</span>
            </button>
          </h1>
        </Link>
      )}

      
    </div>
  );
};

export default Header;
