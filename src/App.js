import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Packages from "./pages/PacketStatus";
import SendPacket from "./pages/NewPacket";
import ActivationPage from "./pages/Activation";
import { AuthenticationProvider } from "./pages/AuthContext";

function App() {
  return (
    <Router>
      <AuthenticationProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/packetstatus" element={<Packages />} />
          <Route path="/newpacket" element={<SendPacket />} />
          <Route path="/activate" element={<ActivationPage />} />
        </Routes>
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
