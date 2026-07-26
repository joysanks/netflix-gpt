import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/918dda59-2ae7-4eaa-9be2-8a3ddd979d4e/web/IN-en-20260720-TRIFECTA-perspective_ca5664c9-e7ca-45da-9d85-173740dbae71_medium.jpg"
          alt="bg-img"
        />
      </div>

      <form className="w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl m-2 py-4">{signIn ? "Sign In" : "Sign Up"}</h1>
        {!signIn &&<input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-700"
        />}
         <input
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 p-2">
          {signIn ? (
            <>
              New to Netflix?{" "}
              <button
                className="to-blue-500 underline"
                onClick={toggleSignInForm}
              >
                Sign Up
              </button>{" "}
              Now
            </>
          ) : (
            <>
              Already Have an account?{" "}
              <span
                className="to-blue-500 underline cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
