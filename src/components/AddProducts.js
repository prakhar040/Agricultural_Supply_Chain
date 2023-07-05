import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { productsRef } from "../firebase/firebase";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const addProduct = async () => {
    setLoading(true);
    try {
      await addDoc(productsRef, data);
      swal({
        title: "Successfully added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      setData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
      });
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <button
        className=" bg-blue-600 ml-8 mt-8 p-2 text-xl"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <Link to={"/products"}>
        <button className=" ml-8 mt-8 bg-blue-600 p-2 text-xl">
          Show Products
        </button>
      </Link>
      <h1 className=" text-center mt-9 text-3xl">Add Products</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name
          <input
            className=" text-black"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category (eg. fruits, vegetables, dairy, etc)
          <input
            className=" text-black"
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Price
          <input
            className=" text-black"
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quantity
          <input
            className=" text-black"
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description
          <input
            className=" text-black"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </label>
        <br />

        <br />
        <button
          onClick={addProduct}
          className=" bg-blue-500 mb-20"
          type="submit"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
