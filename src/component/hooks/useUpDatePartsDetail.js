import { useEffect, useState } from "react";

const useUpDatePartsDetail = (partsId) => {
  const [product, setProduct] = useState({});


  useEffect(() => {
    const url = `https://fierce-reaches-52632.herokuapp.com/product/${partsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [partsId]);
  return [product, setProduct];
};

export default useUpDatePartsDetail