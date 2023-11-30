import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css";
import Header from "./Header.js";
import { registerUser } from '../fetch/registrationFetch.js';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [lockerLocationId, setLocation] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords are not the same!');
      return;
    }
    
    const userData = {
      email,
      username,
      lockerLocationId,
      password
    };
    console.log(userData);
    try {
      const response = await registerUser(userData);
      if (response.status === 200) {
        alert(response.data.message);
        navigate('/');
      } else {
        alert(response.data.message || 'Registration error.');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  
  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="top-container">
          <h2>Register new account:</h2>
        </div>
        <form className="form-styles" onSubmit={handleRegister}>
          <div className="input-styles">
            <label>Email: </label>
            <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-styles">
            <label>Username: </label>
            <input type="text" value={username} name='username' onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-styles">
            <label>Location: </label>
            <select value={lockerLocationId} name='lockerLocationId' onChange={(e) => setLocation(Number(e.target.value))} required>
            <option value={1}>Location 1</option>
            <option value={2}>Location 2</option>
            <option value={3}>Location 3</option>
            <option value={4}>Location 4</option>
            <option value={5}>Location 5</option>
            </select>
          </div>
          <div className="input-styles">
            <label>Password: </label>
            <input type="password" value={password} name='password' onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input-styles">
            <label>Confirm password: </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="register-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Register;