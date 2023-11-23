import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import Header from "./Header.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("location1");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(null);

    // console.logging for now as backend is not connected :)
    console.log({
      email,
      username,
      location,
      password,
      confirmPassword,
    });

    // TODO : here the functionality to send reg. data to backend

    setEmail("");
    setUsername("");
    setLocation("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="top-container">
          <h2 className="font-bold">Register new account:</h2>
          <Link to="/">
            <button className="login-instead">Login instead?</button>
          </Link>
        </div>
        <form className="form-styles" onSubmit={handleSubmit}>
          <div className="input-styles">
            <label>Email: </label>
            <input
              type="text"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
            <label>Locations: </label>
            <select
              className="input-field"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
              <option value="location4">Location 4</option>
              <option value="location5">Location 5</option>
            </select>
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
          <div className="input-styles">
            <label>Confirm password: </label>
            <input
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <Link to="/packetstatus">
            <button type="submit" className="register-button">
              Signup
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
