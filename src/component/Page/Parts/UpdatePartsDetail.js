import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdatePartsDetail = () => {
  const { partsId } = useParams();
  console.log(partsId);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">Up date parts</h1>

      <div className="flex justify-between gap-10">
        <div class="card w-9/12 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">ID: {partsId}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div class="card w-3/12 bg-amber-200 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class=" text-xl font-bold ">Place your order quantity</h2>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Total Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Order Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="text"
                disabled
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="card-actions">
              <Link to="/purchase">
                <button class="btn btn-primary">Purchase Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePartsDetail;