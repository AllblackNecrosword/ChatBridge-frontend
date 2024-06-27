import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Avatar from "./Components/Avatar";
import { useState } from "react";
function App() {
  const [clickprofile,setClickProfile]=useState(null);


  const handleUserclick=(value)=>{
    setClickProfile(value);
  }

  console.log("Parent",clickprofile)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat handleUserclick={handleUserclick}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/avatar" element={<Avatar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
