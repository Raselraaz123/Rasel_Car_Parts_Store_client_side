import React from "react";
import { useNavigate } from "react-router-dom";

const OurProductInfo = ({ fast }) => {

  const navigate = useNavigate();

  const {
    _id,
    picture,
    name,
    Quantity,
    price,
    minOrderQuantity,
    shortDescripttion,
  } = fast;
  const handleParts = (id) => {
   navigate(`/partsInfo/${_id}`);
  }
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img className="w-full h-[250px] rounded-xl" src={picture} alt="img" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <small>{shortDescripttion}</small>
        </p>
        <h4 className="text-xl">Quantity : {Quantity}</h4>
        <h3 className="text-xl">Min Order Quantity {minOrderQuantity}</h3>
        <h3 className="text-2xl">
          Price: $ <span>{price}</span>
        </h3>
        <div className="card-actions">
          <button onClick={() => handleParts(_id)} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProductInfo;
