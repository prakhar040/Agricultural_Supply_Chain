import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { farmerRef } from "../firebase/firebase";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Farm = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: "",
    pname: "",
    quantity: "",
    date: "",
    location: "",
    quality: "",
    conditions: "",
    dateexp: "",
    batchNo: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const addFarm = async () => {
    setLoading(true);
    try {
      await addDoc(farmerRef, data);
      swal({
        title: "Successfully added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      setData({
        name: "",
        pname: "",
        quantity: "",
        date: "",
        location: "",
        quality: "",
        conditions: "",
        dateexp: "",
        batchNo: "",
        price: "",
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
      <Link to={"/farmdash"}>
        <button className=" ml-8 mt-8 bg-blue-600 p-2 text-xl">
          Go to Farmer Dashboard
        </button>
      </Link>
      <h1 className=" text-center mt-9 text-3xl">
        Enter details as <span>Farmer</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Farmer Name:
          <input
            className=" text-black"
            type="text"
            placeholder="Farmer Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            className=" text-black"
            type="text"
            placeholder="Product Name"
            name="pname"
            value={data.pname}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            className=" text-black"
            type="text"
            placeholder="Quantity"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Harvest Date:
          <input
            className=" text-black"
            type="date"
            placeholder="Harvest Date"
            name="date"
            value={data.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            className=" text-black"
            type="text"
            placeholder="Location"
            name="location"
            value={data.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Quality:
          <input
            className=" text-black"
            type="text"
            placeholder="Quality"
            name="quality"
            value={data.quality}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Storage Conditions:
          <input
            className=" text-black"
            type="text"
            placeholder="Storage Conditions"
            name="conditions"
            value={data.conditions}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Expiry date:
          <input
            className=" text-black"
            type="date"
            placeholder="Expiry Date"
            name="dateexp"
            value={data.dateexp}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Batch Number:
          <input
            className=" text-black"
            type="text"
            placeholder="Batch Number"
            name="batchNo"
            value={data.batchNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price per unit:
          <input
            className=" text-black"
            type="text"
            placeholder="Price per unit"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={addFarm} className=" bg-blue-500 mb-20" type="submit">
          {loading ? <TailSpin height={25} color="white" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Farm;
