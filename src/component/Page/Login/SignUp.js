import React from "react";
import { useForm } from "react-hook-form";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);

  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, upDateError] = useUpdateProfile(auth);

  const [token] = useToken(user || user1 || user2);
  const navigate = useNavigate();

  let SignInError;
  if (loading || loading1 || loading2 || updating) {
    return <Loading></Loading>;
  }
  if (error || error1 || error2 || upDateError) {
    SignInError = (
      <p className="text-red-500 mb-2 mt-2">
        {error?.message ||
          error1?.message ||
          error2?.message ||
          upDateError?.message}
      </p>
    );
  }
  if(token) {
  navigate("/parts");
  }
 

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });

    // console.log(data.email, data.password, data.name);
  };

  return (
    <div className="flex justify-center mt-28">
      <div class="  bg-base-100 shadow-2xl">
        <h1 className="text-center font-bold text-2xl mt-5">Sign Up</h1>
        <div class=" items-center text-center px-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col justify-center 
         "
          >
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors?.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered "
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>
            {SignInError}
            <div>
              <input
                className="btn btn-outline font-bold text-xl w-full  max-w-xs mb-5"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div>
            <p className="">
              Already have an account ?
              <Link to="/login" className="text-primary ml-2">
                Please login
              </Link>
            </p>
            <div className="divider ">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent w-full mb-2 "
            >
              Continue with Google
              <img src="https://i.ibb.co/ySzFg1S/google.png" alt="" />
            </button>
            <button
              onClick={() => signInWithFacebook()}
              className="btn  btn-outline w-full mb-5"
            >
              Continue with facebook
              <img src="https://i.ibb.co/WWx4Gtx/facebook.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
