import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from '../../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading';
import useToken from '../../hooks/useToken';


const Login = () => {

    const {
      register,
      formState: { errors },
      handleSubmit,
  } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  
    const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  
  
    const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  

  const [token] = useToken(user || user1||user2);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  
  
    let SignInError;
    if (loading || loading1||loading2) {
      return <Loading></Loading>;
    }
    if (error || error1||error2) {
      SignInError = (
        <p className="text-red-500 mb-2 mt-2">
          {error?.message || error1?.message||error2?.message}
        </p>
      );
  }
  
  if (user || user1 || user2) {
    console.log(user || user1 || user2);
  }
  
    const onSubmit = (data) => {
      signInWithEmailAndPassword(data.email, data.password);
      console.log(data.email ,data.password)
    };
  return (
    <div className="flex justify-center mt-28">
      <div class="card w-1/2  bg-base-100 shadow-2xl">
        <h1 className="text-center font-bold text-2xl mt-5">Login</h1>;
        <div class="card-body items-center text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col justify-center 
         "
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full max-w-xs"
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
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered w-full max-w-xs"
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
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {SignInError}
            <input
              className="btn w-full max-w-xs mb-5"
              type="submit"
              value="Login"
            />
          </form>
          <div>
            <p className="">
              New to Rasel Car Parts Store ?
              <Link to="/signup" className="text-primary ml-2">
                Create new account
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
              className="btn  btn-outline w-full "
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

export default Login;
 