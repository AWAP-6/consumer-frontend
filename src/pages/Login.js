import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import Header from "./Header.js";
import { loginUser } from "../fetch/loginFetch.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password
    };
    console.log('loginData:', loginData)
    
    try {
      const data = await loginUser(loginData);
      if (data.success) {
        navigate('/packetstatus');
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      setLoginError(`Login error: ${error.message}`);
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
        <form className="form-styles" onSubmit={handleLogin}>
          <div className="input-styles">
            <label>Username: </label>
            <input type="text" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div className="input-styles">
            <label>Password: </label>
            <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          {loginError && <p className="error-message">{loginError}</p>}
          <button type="submit" className="log-in-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
