import React, { useEffect, useRef, useState } from "react";
import axios from "../fetch/axiosInstance";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useAuthentication } from "./AuthContext";

const Header = () => {
  const { user } = useAuthentication();
  const [openProfile, setOpenProfile] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleRemoveAccount = async () => {
    const userId = user ? user.id : null;

    if (!userId) {
      console.error("User ID not available");
      return;
    }

    try {
      const response = await fetch(`/users/delete?id=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Account deleted successfully");
      } else {
        console.error("Failed to delete account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
    axios
      .post("/logout")
      .then((response) => {
        console.log("Logout successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <header className="custom-header">
      <h1 className="company-name">Parcel Delivery System</h1>
      <div className="profile-menu">
        {user ? (
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="profile-button"
          >
            Profile
          </button>
        ) : null}
        {openProfile && (
          <div ref={profileMenuRef} className="menu-dropdown">
            <ul>
              <li onClick={handleLogout}>Log out</li>
              <li onClick={handleRemoveAccount}>Remove account</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
