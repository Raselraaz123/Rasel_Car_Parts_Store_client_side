import React from 'react';
import useProduct from '../../hooks/useProduct';
import PartsInfo from './PartsInfo';

const Parts = () => {
   const [products, setProducts] = useProduct();
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-pink-400">
        Our all parts item
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.map((product) => (
          <PartsInfo key={product._id} product={product}></PartsInfo>
        ))}
      </div>
    </div>
  );
};

export default Parts;