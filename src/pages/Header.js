import React, { useEffect, useRef, useState } from "react";
import axios from "../fetch/axiosInstance";
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  const handleLogout = () => {
    axios.post('/logout')
      .then(response => {
        console.log('Logout successful');
        navigate('/login');
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <header className="custom-header">
      <h1 className="company-name">Company Name</h1>
      <div className="profile-menu">
        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="profile-button"
        >
          Profile
        </button>
        {openProfile && (
          <div ref={profileMenuRef} className="menu-dropdown">
            <ul>
              <li onClick={handleLogout}>Log out</li>
              <li>Remove account</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;