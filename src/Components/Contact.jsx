import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Contact = ({ data, handleUserclick }) => {
  const navigate = useNavigate();
  const [handleclick, setHandleClick] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    navigate("/login");
  };

  const onUserClick = (id) => {
    setHandleClick(id);
    handleUserclick(id);
  };

  return (
    <div className="flex flex-col h-full items-center relative">
      <Link to={"/avatar"} className="mb-4">
        <h2 className="text-4xl font-bold text-white text-center">
          ChatBridge
        </h2>
        <div className="border-b-2 mt-2"></div>
      </Link>
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-2 text-white text-3xl">
          {data.map((element, index) => (
            <li
              className="flex items-center p-3 hover:bg-slate-600 cursor-pointer rounded-lg "
              key={index}
              onClick={() => onUserClick(element._id)}
            >
              <img
                src={element.avatarImage}
                alt="Avatar"
                className="w-8 h-8 mr-2 rounded-full"
              />
              {element.username}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="fixed bottom-4 bg-red-500 text-white py-2 px-4 rounded-lg text-2xl hover:bg-red-800"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Contact;
