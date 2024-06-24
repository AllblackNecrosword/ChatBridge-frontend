import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(()=>{
if(localStorage.getItem("user")){
  navigate("/");
}
  },[])

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkValidation = () => {
    const { email, password } = input;
    if (!email || !password) {
      toast.error("Fill up the details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }else if(password.length < 8){
      toast.error("Password should be equal or greater than 8 character", {
        position: "top-right",
        autoClose: 5000,
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
    try {
      if (checkValidation()) {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify(input),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        if (!response.ok) {
          console.log("Error response:", result);
          toast.error({result}, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        if (response.ok) {
          toast.info("Login Successful", {
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
            email: "",
            password: "",
          });
          navigate("/");
          console.log("response",result);
          localStorage.setItem("user",result.user.username)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="w-full max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow-md"
        onSubmit={submithandler}
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <div className="space-y-4 my-4">
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
          Don't have an account ?{" "}
          <Link to={"/register"} className="text-green-800">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
