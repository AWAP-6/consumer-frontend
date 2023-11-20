import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import Header from "./Header.js";

const Register = () => (
  <div>
    <Header />
    <div className="register-container">
      <div className="top-container">
        <h2 className="font-bold">Register new account:</h2>
        <Link to="/">
          <button className="login-instead">Login instead?</button>
        </Link>
      </div>
      <form className="form-styles">
        <div className="input-styles">
          <label>Email: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Username: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Locations: </label>
          <select className="input-field">
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
            <option value="location5">Location 5</option>
          </select>
        </div>
        <div className="input-styles">
          <label>Password: </label>
          <input type="password" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Confirm password: </label>
          <input type="password" className="input-field" />
        </div>
        <Link to="/packetstatus">
          <button className="register-button">Signup</button>
        </Link>
      </form>
    </div>
  </div>
);

export default Register;
