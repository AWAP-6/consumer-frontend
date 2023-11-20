import React from "react";
import "../styles/PacketStatus.css";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import packageData from "./PacketData";

function PackageCard({ title, description, location, openCode }) {
  return (
    <div>
      <Header />
      <div className="package-card">
        <span className="packet-info">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <h2>Location: {location}</h2>
          <h2>Lockercode: {openCode}</h2>
        </span>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <main className="flex-container">
      <div className="top-container">
        <h2 className="packet-status">Packet Status and History:</h2>
        <Link to="/newpacket">
          <button className="send-new-button">Send new packet?</button>
        </Link>
      </div>

      {packageData.map((packageItem) => (
        <div className="packet-text" key={packageItem.title}>
          <PackageCard {...packageItem} />
        </div>
      ))}
    </main>
  );
}
