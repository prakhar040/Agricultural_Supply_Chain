import React from "react";
import image2 from "../../Assets/images/image2.jpg";

const Upper = () => {
  return (
    <div>
      <div className="p-3 items-center">
        <img
          className=" h-1/3 md:h-auto w-screen md:max-w-lg rounded-lg md:ml-8 mt-6"
          src={image2}
          alt=""
        ></img>
        <br />
        <hr className=" border-b-2 border-gray-500" />

        <div className="title">
          <h1>SecureChain</h1>
          <br />
          <span>Trustworthy Authentication in the Food Supply Chain</span>
          <br />
          <br />
          <br />
          <p>
            Ensuring transparency and trust in every step of the journey from
            farm to table. Protecting your health and ensuring the authenticity
            of every food product with our cutting-edge authentication
            technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upper;
