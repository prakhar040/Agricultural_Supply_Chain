import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image21 from "../Assets/images/image21.jpeg";
import image22 from "../Assets/images/image22.jpg";
import image23 from "../Assets/images/image23.jpeg";
import image24 from "../Assets/images/image24.jpg";

const Directory = () => {
  const [data, setData] = useState([
    {
      divert: "/manu",
      image: image22,
      name: "Manufacturer",
    },
    {
      divert: "/farm",
      image: image23,
      name: "Farmer",
    },
    {
      divert: "/addproducts",
      image: image24,
      name: "Add Product",
    },
  ]);
  return (
    
    
    <div className=" flex justify-center items-center flex-col mt-8">
      <h1 className=" text-2xl">Welcome to the Directory page!</h1>
      

      <img className=" mt-8 w-2/3 h-96" src={image21} alt="" />
      <p className=" mt-7 text-lg">
        Take the next step and add more details about your business or farm!
        Click the links below to enter the details as manufacturer and farmer
        respectively.
        <br />
        <br />
        <span className=" justify-center text-center flex">
          {" "}
          As a manufacturer, you can showcase your products and capabilities.
          <br /> As a farmer, you can highlight your produce and farming
          practices.
        </span>
        <br />{" "}
        <p className=" text-center">
          Don't miss out on this opportunity to enhance your profile and connect
          with potential partners or customers.
        </p>
      </p>
      <div className=" flex flex-wrap justify-evenly p-3 mt-8">
        {data.map((e, i) => {
          return (
            <Link to={e.divert}>
              <div className=" text-lg font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-500 w-96 ">
                <img
                  className=" h-56 text-purple-700 "
                  src={e.image}
                  alt=""
                ></img>
                <br />
                <div className=" flex justify-center items-center flex-col mr-12">
                  <h1>
                    <span className=" text-center text-xl">{e.name}</span>
                  </h1>
                  <button className=" bg-blue-700 p-1">Enter details</button>
                </div>
              </div>
            </Link>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Directory;
