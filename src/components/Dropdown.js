import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn cursor-pointer text-xs md:text-2xl"
        onClick={(e) => setIsActive(!isActive)}
      >
        More
      </div>
      {isActive && (
        <div className="dropdown-content">
          <Link to={"/manufacturer"}>
            <div className="dropdown-item">Manufacturer</div>
          </Link>
          <Link to={"/farmer"}>
            <div className="dropdown-item">Farmer</div>
          </Link>
          <Link to={"/consumer"}>
            <div className="dropdown-item">Consumer</div>
          </Link>
          <Link to={"/retailer"}>
            <div className="dropdown-item">Retailer</div>
          </Link>
          <Link to={"/supplier"}>
            <div className="dropdown-item">Supplier</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
