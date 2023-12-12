import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PacketStatus.css";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { useAuthentication } from "./AuthContext";

export default function Parcels() {
  const { user } = useAuthentication();
  const [userParcels, setUserParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserParcels = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:8080/parcels?sender_email=${user.email}`
          );

          setUserParcels(response.data);
        } else {
          setError("User not found in context");
        }
      } catch (error) {
        setError(`Error fetching parcels for user: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserParcels();
  }, [user]);
  /*
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
  */

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleDetailsClick(parcel) {
    console.log("View details clicked for parcel:", parcel);
  }

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
              <p>{`Location: ${parcel.fromLocation}`}</p>
              {/*
              <div className="status">
                <div
                  className={`status-indicator ${getStatusColor(
                    transformStatus(parcel.locker.status)
                  )}`}
                />
              </div>
                  */}
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
