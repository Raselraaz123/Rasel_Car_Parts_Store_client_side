import React from 'react';
import { useForm } from "react-hook-form";
const AddReview = () => {

   const {
     handleSubmit,
   } = useForm();
   const onSubmit = (data) => console.log(data);
  return (
    <div>
    
      <div className="flex justify-center mt-28">
        <div class="card w-1/2 lg:max-w-lg bg-from-500 shadow-2xl">
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
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
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
                ></textarea>
              </div>

              <div className="">
                <input
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


 