import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { manufacturerRef } from "../firebase/firebase";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Manu = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: "",
    serialId: "",
    productNo: "",
    productName: "",
    from: "",
    to: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);

  const addManu = async () => {
    setLoading(true);
    try {
      await addDoc(manufacturerRef, data);
      swal({
        title: "Successfully added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      setData({
        name: "",
        serialId: "",
        productNo: "",
        productName: "",
        from: "",
        to: "",
        time: "",
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
      <Link to={"/manudash"}>
        <button className=" ml-8 mt-8 bg-blue-600 p-2 text-xl">
          Go to Manufacturer Dashboard
        </button>
      </Link>
      <h1 className=" text-center mt-9 text-3xl">
        Enter details as <span>Manufacturer</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Manufacturer Name:
          <input
            className=" text-black"
            type="text"
            placeholder="Manufacturer Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Serial ID:
          <input
            className=" text-black"
            type="text"
            placeholder="Serial ID"
            name="serialId"
            value={data.serialId}
            onChange={handleChange}
          />
        </label>
        <label>
          Product Number:
          <input
            className=" text-black"
            type="text"
            placeholder="Product Number"
            name="productNo"
            value={data.productNo}
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
            name="productName"
            value={data.productName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          From:
          <input
            className=" text-black"
            type="text"
            placeholder="From"
            name="from"
            value={data.from}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          To:
          <input
            className=" text-black"
            type="text"
            placeholder="To"
            name="to"
            value={data.to}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Time of Dispatch:
          <input
            className=" text-black"
            type="date"
            placeholder="Date of Dispatch"
            name="time"
            value={data.time}
            onChange={handleChange}
          />
        </label>
        <br />
        <button onClick={addManu} className=" bg-blue-500 mb-20" type="submit">
          {loading ? <TailSpin height={25} color="white" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Manu;
