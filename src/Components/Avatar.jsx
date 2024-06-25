import React from "react";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const navigate = useNavigate();
  const Clickhandler = (e) => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-950">
      <div className="bg-white p-4 rounded-xl text-black font-bold text-center ">
        <div className="flex flex-col space-y-2 text-2xl font-light">
          <h1>Hi</h1>
          <h1 className="font-bold">Koshish Khadka</h1>
          <h1>,Welcome to ChatBridge</h1>
        </div>
        <button className="border p-2 rounded-xl mt-4 hover:bg-black hover:text-white hover:font-bold mx-auto" onClick={Clickhandler}>
          Let's Chat
        </button>
      </div>
    </div>
  );
};

export default Avatar;
