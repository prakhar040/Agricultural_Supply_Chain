import React from "react";
import { getDocs, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { farmerRef } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const FarmDash = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setData([]);
      const _data = await getDocs(farmerRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });

      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div>
      <button
        className=" bg-blue-600 ml-8 mt-8 p-2 text-xl"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <div className=" mt-6 ml-8 mr-8">
        {loading ? (
          <div className=" w-full flex justify-center items-center h-96">
            <ThreeDots height={40} color="white" />
          </div>
        ) : (
          data.map((e, i) => {
            return (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Farmer Name</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Harvest Date</th>
                      <th>Location</th>
                      <th>Quality</th>
                      <th>Storage Conditions</th>
                      <th>Expiry Date</th>
                      <th>Batch Number</th>
                      <th>Price per unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.pname}</td>
                      <td>{e.quantity}</td>
                      <td>{e.date}</td>
                      <td>{e.location}</td>
                      <td>{e.quality}</td>
                      <td>{e.conditions}</td>
                      <td>{e.dateexp}</td>
                      <td>{e.batchNo}</td>
                      <td>{e.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FarmDash;
