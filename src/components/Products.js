import React from "react";
import { doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { productsRef } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setData([]);
      const _data = await getDocs(productsRef);
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
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.category}</td>
                      <td>{e.price}</td>
                      <td>{e.quantity}</td>
                      <td>{e.description}</td>
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

export default Products;
