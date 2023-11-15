import React from "react";
import "../styles/Register.css";

const Register = () => (
  <div className="register-container">
    <div className="flex-container">
      <h2 className="font-bold">Register new account:</h2>
      <button className="login-instead">Login instead?</button>
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
      <button className="register-button">Signup</button>
    </form>
  </div>
);

export default Register;
