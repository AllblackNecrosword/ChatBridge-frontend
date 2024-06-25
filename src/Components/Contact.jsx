import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Contact = ({ data }) => {
  return (
    <div className="flex flex-col h-full items-center">
      <Link to={"/avatar"}>
        <img src={Logo} alt="Logo" className="w-6 h-auto mb-4 text-white" />
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          ChatBridge
        </h2>
      </Link>
      <div>
        <ul className="space-y-2 text-white text-3xl">
          {data.map((element, index) => {
            return (
              <li className="flex items-center p-2 hover:bg-slate-600 cursor-pointer rounded-lg" key={index}>
                <img
                  src={element.avatarImage}
                  alt="Avatar"
                  className="w-8 h-8 mr-2 rounded-full"
                />
                {element.username}
              </li>
            );
          })}

      
        </ul>
      </div>
    </div>
  );
};

export default Contact;
