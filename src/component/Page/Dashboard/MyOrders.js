import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyOrdersDetail from './MyOrdersDetail';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(orders)
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          console.log("res", res)
          if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("accessToken");
            navigate('/')
          }
       return   res.json()
        })
        .then((data) => {
          setOrders(data)
        });
    }
  },[user])
  return (
    <div>
      <h1 className="text-2xl text-purple-400 font-bold text-center mt-5">
        My Order {orders.length}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>parts Name</th>
              <th>Order Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrdersDetail
                key={order._id}
                order={order}
                index={index}
              ></MyOrdersDetail>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;