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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className=" text-3xl text-blue-700">Get In Touch!</h1>
      <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
      <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
      <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={data.message}
              onChange={handleChange}
              aria-required
              required
            ></textarea>
      <button onClick={addContact} className=" mt-7 bg-blue-600" type="submit">
      {loading ? <TailSpin height={25} color="white" /> : "Send"}
      </button>
    </form>
  );
};

export default Contact;
