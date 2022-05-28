import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUpDatePartsDetail from '../../hooks/useUpDatePartsDetail';
import Loading from '../../shared/Loading';
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const { partsId } = useParams();
const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useUpDatePartsDetail(partsId);


  if (loading) {
    return <Loading></Loading>
  }
  const handlePurchaseOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      parts: product.name,
      partsId: partsId,
      address: event.target.address.value,
      phone: event.target.phone.value,
      OrderQuantity: event.target.yourorderquantity.value,
    };
    axios
      .post("https://fierce-reaches-52632.herokuapp.com/order", order)
      .then((res) => {
        console.log(res);
        const { data } = res;
        if (data.insertedId) {
          toast("your order is booked");
          event.target.reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-20 mb-5">
        Purchase your Item
      </h1>
      <div className="flex justify-center">
        <div class="card w-1/2  bg-amber-200 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class=" text-xl font-bold ">Place your order quantity</h2>
            <form onSubmit={handlePurchaseOrder}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">address</span>
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your number"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Parts Name</span>
                </label>
                <textarea
                  type="text"
                  name="partsname"
                  value={product?.name}
                  disabled
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Total Quantity</span>
                </label>
                <input
                  type="text"
                  name="totalquantity"
                  value={product?.Quantity}
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
                  name="minimumorderquantity"
                  value={product?.minOrderQuantity}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Your Order Quantity</span>
                </label>
                <input
                  type="number"
                  name="yourorderquantity"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />

                <div class="card-actions ">
                  <input
                    type="submit"
                    value="Purchase Now"
                    class="btn btn-primary mt-3 w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Purchase;