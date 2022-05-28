import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUpDatePartsDetail from '../../hooks/useUpDatePartsDetail';
import Loading from '../../shared/Loading'

const UpdatePartsDetail = () => {
  const { partsId } = useParams();
  const [user, loading] = useAuthState(auth);

  const [product, setProduct] = useUpDatePartsDetail(partsId);


  // console.log(product);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-3xl text-indigo-500 font-bold mt-5">
        Up date parts
      </h1>

      <div class="card mb-5 mt-5 bg-base-100 shadow-2xl">
        <h2 className="text-xl mt-3 text-pink-400 text-center">Client info</h2>
        <figure class="px-10 pt-10">
          <img src={user?.photoURL} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name : {user?.displayName}</h2>
          <p>Email : {user?.email}</p>
          <p>Phone : {user?.phoneNumber}</p>
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div class="card w-full bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={product?.picture}
              alt="Shoes"
              class="rounded-xl h-[250px]"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: {product?.name}</h2>
            <p>ID : {product?._id}</p>
            <p>{product?.shortDescripttion}</p>
            <h3 className="text-xl font-semibold">
              Per piece price : $ {product?.price}
            </h3>
            <div class="card-actions">
              <Link to={`/purchase/${partsId}`}>
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