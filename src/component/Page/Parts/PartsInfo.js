import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsInfo = ({ product }) => {
    const {
      picture,
      name,
      Quantity,
      price,
      minOrderQuantity,
      shortDescripttion,
  } = product;
  const navigate = useNavigate();
  const handleParts = () => {
    navigate("/updateParts");
  }
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="w-full h-[250px] rounded-xl"
          src={picture}
          alt="img"
      
        />
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
          <button
    onClick={handleParts}
            className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PartsInfo;