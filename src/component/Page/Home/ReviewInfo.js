import React from "react";

const ReviewInfo = ({ review }) => {
  const { name, picture, reviews, reviews_des } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl p-5">
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-pink-300 font-semibold font-mono"> {reviews} </p>
        <p>
          <small>{reviews_des}</small>
        </p>
      </div>
      <figure>
        <img
          className="w-[100px] h-[100px] rounded-xl"
          src={picture}
          alt="img"
        />
      </figure>
    </div>
  );
};

export default ReviewInfo;
