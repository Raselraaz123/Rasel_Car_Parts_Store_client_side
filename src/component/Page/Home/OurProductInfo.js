import React from 'react';

const OurProductInfo = ({ fast }) => {
  console.log(fast)
  const {
    picture,
    name,
    Quantity,
    price,
    minOrderQuantity,
    shortDescripttion,
  } = fast;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={picture} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>
          <small>{shortDescripttion}</small>
        </p>
        <h4 className="text-xl">Quantity : {Quantity}</h4>
        <h3 className="text-xl">Min Order Quantity {minOrderQuantity}</h3>
        <h3 className="text-2xl">
          Price:$ <span>{price}</span>
        </h3>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OurProductInfo;

 