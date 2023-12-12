import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../styles/Login.css";
import Header from "./Header.js";
import { loginUser } from "../fetch/loginFetch.js";
import { useAuthentication } from "./AuthContext";

const Login = () => {
  const { login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [redirectToPacketStatus, setRedirectToPacketStatus] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };

    try {
      const data = await loginUser(loginData);
      console.log("Full API Response:", data);

      if (data.success) {
        if (data.user) {
          login(data.user);
          setRedirectToPacketStatus(true);
        } else {
          console.error("User is null in the API response");
        }
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      setLoginError(`Login error: ${error.message}`);
    }
  };

  if (redirectToPacketStatus) {
    return <Navigate to="/packetstatus" />;
  }

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="top-container">
          <h2 className="font-bold">Login:</h2>
          <Link to="/register">
            <button className="create-account">Create account?</button>
          </Link>
        </div>
        <form className="form-styles" onSubmit={handleLogin}>
          <div className="input-styles">
            <label>Username: </label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-styles">
            <label>Password: </label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p className="error-message">{loginError}</p>}
          <button type="submit" className="log-in-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
