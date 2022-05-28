import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user)
    const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data)
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div class="card w-full lg:max-w-lg bg-from-500 shadow-2xl">
          <div class="card-body">
            <h2 class=" text-center text-3xl font-bold text-fuchsia-400 ">
           My Profile
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text"> Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.displayName}
                  {...register("name")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.email}
                  {...register("email")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter phone number"
                  {...register("phone")}
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">address</span>
                </label>
                <textarea
                  class="textarea textarea-success"
                  placeholder="Enter your address"
                  {...register("address")}
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

export default MyProfile;