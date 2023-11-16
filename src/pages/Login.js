import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Header from "./Header.js";

const Login = () => (
  <div>
    <Header />
    <div className="login-container">
      <div className="top-container">
        <h2 className="font-bold">Login:</h2>
        <Link to="/register">
          <button className="create-account">Create account?</button>
        </Link>
      </div>
      <form className="form-styles">
        <div className="input-styles">
          <label>Username: </label>
          <input type="text" className="input-field" />
          <div className="input-styles">
            <label>Password: </label>
            <input type="password" className="input-field" />
          </div>
          <Link to="/packetstatus">
            <button className="log-in-button">Login</button>
          </Link>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
