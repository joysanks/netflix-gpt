import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/918dda59-2ae7-4eaa-9be2-8a3ddd979d4e/web/IN-en-20260720-TRIFECTA-perspective_ca5664c9-e7ca-45da-9d85-173740dbae71_medium.jpg"
          alt="bg-img"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="text-3xl m-2 p-2">Sign In</h1>
        <input type="email" placeholder="Email Address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-2 m-2 bg-red-700  ">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
