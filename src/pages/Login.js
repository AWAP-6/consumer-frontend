import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Header from "./Header.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.logging for now as backend is not connected :)
    console.log({
      username,
      password,
    });

    // TODO: create backend validation functionality
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      setLoginError(null);

      // TODO: Redirect to users own pakcetstatus page when successful
      console.log("Login successful! Redirecting...");
    } else {
      setLoginError("Invalid username or password");
    }
  };

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
        <form className="form-styles" onSubmit={handleSubmit}>
          <div className="input-styles">
            <label>Username: </label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-styles">
            <label>Password: </label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {loginError && <p className="error-message">{loginError}</p>}
          <Link to="/packetstatus">
            <button type="submit" className="log-in-button">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
