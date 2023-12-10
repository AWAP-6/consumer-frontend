import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PacketStatus.css";
import Header from "./Header.js";
import { Link } from "react-router-dom";

export default function Parcels() {
  const [userParcels, setUserParcels] = useState([]);

  useEffect(() => {
    const fetchUserParcels = async () => {
      try {
        const authToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authToken="))
          .split("=")[1];
        const userEmail = decodeToken(authToken).email;

        const response = await axios.get(`/parcels?sender_email=${userEmail}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        setUserParcels(response.data);
      } catch (error) {
        console.error("Error fetching parcels for user:", error);
      }
    };

    const decodeToken = (token) => {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const decoded = JSON.parse(atob(base64));
        return decoded;
      } catch (error) {
        console.error("Error decoding token:", error);
        return {};
      }
    };

    fetchUserParcels();
  }, []);
  const transformStatus = (lockerStatus) => {
    if (lockerStatus === "ready for customer pickup") {
      return "ready for pickup";
    } else if (lockerStatus === "reserved by driver") {
      return "on delivery to pickup location";
    } else if (lockerStatus === "reserved by customer") {
      return "on delivery to warehouse";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ready for pickup":
        return "green-ball";
      case "on delivery to pickup location":
      case "on delivery to warehouse":
        return "yellow-ball";
      default:
        return "transparent-ball";
    }
  };

  return (
    <div>
      <Header />
      <main className="flex-container">
        <div className="top-container">
          <h2 className="packet-status">Packet Status and History:</h2>
          <Link to="/newpacket">
            <button className="send-new-button">Send new packet?</button>
          </Link>
        </div>
        {userParcels.map((parcel) => (
          <div className="package-card" key={parcel.parcelId}>
            <h2 className="packet-text">{`Parcel ID: ${parcel.parcelId}`}</h2>
            <div className="packet-info">
              <p>{`Location: ${parcel.toLocation}`}</p>
              <div className="status">
                <div
                  className={`status-indicator ${getStatusColor(
                    transformStatus(parcel.locker.status)
                  )}`}
                />
              </div>
            </div>
            <button
              className="details-button"
              onClick={() => handleDetailsClick(parcel)}
            >
              View Details
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

function handleDetailsClick(parcel) {
  console.log("View details clicked for parcel:", parcel);
}
