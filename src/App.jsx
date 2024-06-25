import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Avatar from "./Components/Avatar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/avatar" element={<Avatar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
