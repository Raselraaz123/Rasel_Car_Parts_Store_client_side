import { useEffect, useState } from "react";

const useUpDatePartsDetail = (partsId) => {
  const [product, setProduct] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/product/${partsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [partsId]);
  return [product, setProduct];
};

export default useUpDatePartsDetail