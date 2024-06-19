import React, { useState } from "react";
import image from "../assets/Logo.png";
import {Link} from "react-router-dom"
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  // console.log(input);

  const submithandler = () => {
    alert("Submited");
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="w-full max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow-md"
        onSubmit={submithandler}
      >
        <div className="text-center mb-6">
          <img src={image} alt="Logo" className="mx-auto mb-4 w-8 h-auto" />
          <h1 className="text-2xl font-bold">ChatBridge</h1>
        </div>
        <div className="space-y-4 my-4">
          <input
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="UserName"
            type="text"
            name="username"
            value={input.username}
            onChange={inputHandler}
          />
          <input
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            type="email"
            name="email"
            value={input.email}
            onChange={inputHandler}
          />
          <input
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
          <button
            className="border p-3 rounded-2xl bg-blue-900 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        <span >
          Already have an account ? <Link to={"/login"} className="text-blue-800">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
