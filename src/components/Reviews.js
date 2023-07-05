import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import { addDoc, doc, updateDoc, getDocs } from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import image20 from "../Assets/images/image20.png";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [newAdded, setNewAdded] = useState(0);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        name: "Anonymous",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });
      setRating(0);
      setForm("");
      setNewAdded(newAdded + 1);

      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      setData([]);
      const _data = await getDocs(reviewsRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });

      setReviewsLoading(false);
    }
    getData();
  }, [newAdded]);

  return (
    <div className=" flex justify-center items-center flex-col mt-10">
    <img className=" w-2/3" src={image20} alt="" />
    <div className=" mt-4 border-t-2 border-gray-700  items-center justify-center w-2/3">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-3 outline-none header"
      />
      <button
        onClick={sendReview}
        className=" bg-blue-500 p-2 w-full flex justify-center"
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className=" mt-6 flex justify-center">
          <ThreeDots height={10} color="white" />
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return (
              <div
                className="p-2 border-b border-gray-600 header bg-opacity-50 w-full mt-2"
                key={i}
              >
                <div className="flex items-center">
                  <p className="text-blue-500">{e.name}</p>
                  <p className="ml-3 text-xs">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
};

export default Reviews;
