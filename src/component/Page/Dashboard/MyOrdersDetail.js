import React from 'react';

const MyOrdersDetail = ({ order, index }) => {
  const { email, parts, OrderQuantity, name, phone } = order;
  return (
    <tr>
      <th>{index+1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{parts}</td>
      <td>{OrderQuantity}</td>
    </tr>
  );
};

export default MyOrdersDetail;