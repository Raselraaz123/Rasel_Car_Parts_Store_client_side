import { useEffect, useState } from "react"

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://fierce-reaches-52632.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [])
  return [reviews,setReviews]
}
export default useReview;