import React from 'react';
import useProduct from '../../hooks/useProduct';
import OurProductInfo from './OurProductInfo';
import {ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';

const OurProduct = () => {
  const navigate=useNavigate()
  const [products, setProducts] = useProduct()
  const fast6 = products.slice(0, 6);
  const handleMoreItem = () => {
    navigate("/parts");
  }
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center text-green-300">
        Our Product
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {fast6.map((fast) => (
          <OurProductInfo key={fast._id} fast={fast}></OurProductInfo>
        ))}
        <button
          onClick={handleMoreItem}
          className="btn btn-link text-2xl font-mono "
        >
          more item
          <ArrowNarrowRightIcon className="h-5 w-5 font-bold ml-5" />
        </button>
      </div>
    </div>
  );
};

export default OurProduct;