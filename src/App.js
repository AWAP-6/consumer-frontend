import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Packages from "./pages/PacketStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/packetstatus" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
