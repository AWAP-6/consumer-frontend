import React from "react";
import "../styles/Login.css";

const Login = () => (
  <div className="login-container">
    <div className="flex-container">
      <h2 className="font-bold">Login:</h2>
      <button className="create-account">Create account?</button>
    </div>
    <form className="form-styles">
      <div className="input-styles">
        <label>Username: </label>
        <input type="text" className="input-field" />
      </div>
      <div className="input-styles">
        <label>Password: </label>
        <input type="password" className="input-field" />
      </div>
      <button className="login-button">Login</button>
    </form>
  </div>
);

export default Login;
