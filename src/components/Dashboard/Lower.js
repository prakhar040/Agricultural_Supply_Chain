import React from "react";
import image5 from "../../Assets/images/image5.jpg";
import image6 from "../../Assets/images/image6.jpeg";
import image7 from "../../Assets/images/image7.jpg";
import image13 from "../../Assets/images/image13.jpeg";
import image14 from "../../Assets/images/image14.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

const Lower = () => {
  const [data, setData] = useState([
    {
      divert: "/Manufacturer",
      image: image5,
      name: "Manufacturer",
      description: "Discover Quality Products Directly from the Manufacturer",
    },
    {
      divert: "/Farmer",
      image: image6,
      name: "Farmer",
      description: "Empowering Farmers for a Sustainable Food Supply Chain",
    },
    {
      divert: "/Consumer",
      image: image7,
      name: "Consumer",
      description: "Streamlined Food Supply Chain for Consumers",
    },
    {
      divert: "/Retailer",
      image: image13,
      name: "Retailer",
      description: "Ensuring accessibility, convenience, and quality.",
    },
    {
      divert: "/Supplier",
      image: image14,
      name: "Supplier",
      description:
        "Ensuring a steady flow of resources for production and distribution.",
    },
  ]);

  return (
    <div>
      <h1 className=" text-center mt-10 text-3xl">Stakeholders</h1>
      <br />
      <p className=" text-center text-2xl">
        SUSTAINABLE SUPPLY CHAIN MANAGEMENT
      </p>
      <div className=" flex flex-wrap justify-evenly p-3 mt-8">
        {data.map((e, i) => {
          return (
            <Link to={e.divert}>
              {" "}
              <div className=" text-lg font-medium card shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-500 w-96 ">
                <img className=" h-56 " src={e.image} alt=""></img>
                <h1>
                  <span className=" ml-32 text-pink-400 text-xl">{e.name}</span>
                </h1>
                <h1 className=" text-sm">{e.description}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Lower;
