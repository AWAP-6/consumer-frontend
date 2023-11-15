import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const profileMenuRef = useRef(null);

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
              <li>Log out</li>
              <li>Remove account</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
