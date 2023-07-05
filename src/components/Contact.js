import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { contactsRef } from "../firebase/firebase";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const addContact = async () => {
    setLoading(true);
    try {
      await addDoc(contactsRef, data);
      swal({
        title: "Message Sent Successfully",
        icon: "success",
        buttons: false,
        timer: 3000,
      })
      

      setData({
        name:"",
        email:"",
        message:""
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

  return (
    <form>
      <h1 className=" text-3xl text-blue-700">Get In Touch!</h1>
      <input
        className=" mt-6 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        type="text"
        id=""
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Enter Name"
      />
      <input
        className=" mt-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        type="email"
        id=""
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="Enter Mobile No."
      />
      <textarea
        className=" mt-4 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        type="message"
        id=""
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        cols="30"
        rows="7"
        placeholder="type here..."
      />
      <button onClick={addContact} className=" mt-7 bg-blue-600" type="submit">
      {loading ? <TailSpin height={25} color="white" /> : "Send"}
      </button>
    </form>
  );
};

export default Contact;
