import React, { useEffect, useState } from "react";
import image from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    avatarImage: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  console.log(input);

  const checkValidation = () => {
    const { username, email, password } = input;
    if (!username || !email || !password) {
      toast.error("Fill up the form", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    return true;
  };

  const submithandler = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
          credentials: "include",
        });
        const result = await response.json();
        if (!response.ok) {
          console.log("Error response:", result);
        }

        if (response.ok) {
          toast.info("Registration Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setInput({
            username: "",
            email: "",
            password: "",
            avatarImage: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
          });
          console.log("result", result);
          localStorage.setItem("user", result.createuser);
          navigate("/avatar");
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-950">
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
        <span>
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-800">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
