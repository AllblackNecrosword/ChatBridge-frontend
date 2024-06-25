import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Messages from "./Messages";

const Chat = () => {
  const [currentuser, setCurrentuser] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      setCurrentuser(JSON.parse(user));
    }
  }, [navigate]);
  // console.log(currentuser._id);

  const getData = async () => {
    if (currentuser) {
      // Check if currentUser is set
      try {
        const response = await fetch(
          `http://localhost:5000/getuser/${currentuser._id}`
        );
        if (!response.ok) {
          console.log(response.error);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log("All user",data);

  useEffect(() => {
    getData();
  }, [currentuser]);

  return (
    <div className="text-5xl bg-indigo-950 h-screen flex items-center justify-center">
      <div className="bg-slate-500 w-3/4 h-3/4 rounded-lg flex">
        <div className="w-1/4 h-full p-4 overflow-auto">
          <Contact data={data} />
        </div>
        <div className="w-3/4 h-full p-4 overflow-auto">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Chat;
