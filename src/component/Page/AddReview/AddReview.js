import React from 'react';
import { useForm } from "react-hook-form";
const AddReview = () => {

   const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const url = `https://fierce-reaches-52632.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
      console.log(result)
    })
    
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div class="card w-full lg:max-w-lg bg-from-500 shadow-2xl">
          <div class="card-body">
            <h2 class=" text-center text-3xl font-bold text-fuchsia-400 ">
              Add your Review
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text"> Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">photo url</span>
                </label>
                <input
                  type="text"
                  {...register("picture")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Rating and review</span>
                </label>
                <input
                  type="text"
                  placeholder="please Enter Rating"
                  {...register("reviews")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Add your comment</span>
                </label>
                <textarea
                  class="textarea textarea-success"
                  placeholder="please add same text"
                  {...register("reviews_des")}
                ></textarea>
              </div>

              <div className="">
                <input
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  value="submit"
                  class="btn btn-primary w-full max-w-xs mt-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;


 