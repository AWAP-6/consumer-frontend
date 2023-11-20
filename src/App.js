import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Packages from "./pages/PacketStatus";
import SendPacket from "./pages/NewPacket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/packetstatus" element={<Packages />} />
        <Route path="/newpacket" element={<SendPacket />} />
      </Routes>
    </Router>
  );
}

export default App;
