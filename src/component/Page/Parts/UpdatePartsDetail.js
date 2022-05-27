import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading'

const UpdatePartsDetail = () => {
  const { partsId } = useParams();
  const [product, setProduct] = useState({});
  const [user, loading, error] = useAuthState(auth);

  console.log(user, "hello");
  useEffect(() => {
    const url = `http://localhost:5000/product/${partsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user]);
  // console.log(product);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-3xl text-indigo-500 font-bold mt-5">Up date parts</h1>

      <div class="card mb-5 mt-5 bg-base-100 shadow-2xl">
        <h2 className='text-xl mt-3 text-pink-400 text-center'>Client info</h2>
        <figure class="px-10 pt-10">

          <img src={user.photoURL} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name : {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <p>Phone : {user?.phoneNumber}</p>
        
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div class="card w-9/12 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={product.picture}
              alt="Shoes"
              class="rounded-xl h-[250px]"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: {product.name}</h2>
            <p>ID : {product._id}</p>
            <p>{product.shortDescripttion}</p>
            <h3 className="text-xl font-semibold">
              Per piece price : $ {product.price}
            </h3>
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
                value={product.Quantity}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text"> Minimum Order Quantity</span>
              </label>
              <input
                disabled
                type="text"
                value={product.minOrderQuantity}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Order Quantity</span>
              </label>
              <input
                type="number"
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
};;

export default UpdatePartsDetail;