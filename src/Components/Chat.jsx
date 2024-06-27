import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Messages from "./Messages";

const Chat = ({ handleUserclick }) => {
  const [currentuser, setCurrentuser] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      // setCurrentuser(JSON.parse(user));
      setCurrentuser(user);
    }
  }, [navigate]);


  const getData = async () => {
    if (currentuser) {
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

  useEffect(() => {
    getData();
  }, [currentuser]);

  const handleContactClick = (id) => {
    setSelectedUserId(id);
    handleUserclick(id); // Optional: if you need to do additional handling
  };

  return (
    <div className="text-5xl bg-indigo-950 h-screen flex items-center justify-center">
      <div className="bg-slate-500 w-3/4 h-3/4 rounded-lg flex">
        <div className="w-1/4 h-full p-4 overflow-auto">
          <Contact data={data} handleUserclick={handleContactClick} />
        </div>
        <div className="w-3/4 h-full p-4 overflow-auto">
          <Messages contactId={selectedUserId} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
