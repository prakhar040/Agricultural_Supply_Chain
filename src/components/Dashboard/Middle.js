import React from "react";
import image3 from "../../Assets/images/image3.jpg";
import image4 from "../../Assets/images/image4.jpg";
import image1 from "../../Assets/images/image1.jpg";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <div>
      <h4 className=" mt-24 text-2xl items-center text-center">
        STREAMLINE FOOD SUPPLY CHAIN WITH TRANSPARENT TRACKING, EASY TRADE, AND
        RELIABLE AUTHENTICATION THROUGH BLOCKCHAIN POWERED END TO END CONSUMER
        EXPERIENCE PLATFORM
      </h4>

      <br />
      <br />

      <div className="flex flex-wrap justify-evenly">
        <div className=" h-96 w-96">
          <Link to={"/traceability"}>
            <div>
              <div className="rounded-full overflow-hidden">
                <img
                  className=" rounded-full h-96 w-96"
                  src={image3}
                  height="300px"
                  alt=""
                />
              </div>
              <br />

              <h4 className=" ml-32 text-2xl">Traceability</h4>
            </div>
          </Link>
          <br />
          <span className=" text-sm">
            It ensures transparency and accountability by enabling the tracking
            of products from farm to fork, safeguarding against fraud and
            ensuring the safety and quality of the food consumed.
          </span>
        </div>

        <div className="h-96 w-96">
          <Link to={"/tradeability"}>
            {" "}
            <div>
              <div className="rounded-full overflow-hidden">
                <img
                  className=" rounded-full h-96 w-96"
                  src={image4}
                  height="300px"
                  alt=""
                />
              </div>
              <br />

              <h4 className=" ml-32 text-2xl">Tradeability</h4>
            </div>
          </Link>

          <br />
          <span className=" text-sm">
            It ensures transparent transactions and efficient traceability,
            enabling consumers to confidently verify the origin, quality, and
            safety of their food.
          </span>
        </div>

        <div className="h-96 w-96">
          <Link to={"/reputation"}>
            <div>
              <div className="rounded-full overflow-hidden">
                <img
                  className=" rounded-full h-96 w-96"
                  src={image1}
                  height="300px"
                  alt=""
                />
              </div>
              <br />

              <h4 className=" ml-24 text-2xl">Reputation System</h4>
            </div>
          </Link>

          <br />
          <span className=" text-sm">
            Mechanism to allow users to rate product in marketplace in order to
            build trust through reputation.
          </span>
        </div>
      </div>

      <hr className="my-hr" />
    </div>
  );
};

export default Middle;
