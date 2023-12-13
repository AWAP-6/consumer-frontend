import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal.js";
import "../styles/Modal.css";
import "../styles/PacketStatus.css";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { useAuthentication } from "./AuthContext";

export default function Parcels() {
  const { user } = useAuthentication();
  const [userParcels, setUserParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedParcel, setSelectedParcel] = useState(null);

  useEffect(() => {
    const fetchUserParcels = async () => {
      try {
        console.log("Fetching user parcels...");
        if (user) {
          console.log("User found in context:", user);
          const response = await axios.get(
            `awap-6server.onrender.com/parcels/get?sender_email=${user.email}`
          );

          console.log("Received response for user parcels:", response.data);
          setUserParcels(response.data);
        } else {
          console.error("User not found in context");
          setError("User not found in context");
        }
      } catch (error) {
        console.error("Error fetching parcels for user:", error.message);
        setError(`Error fetching parcels for user: ${error.message}`);
      } finally {
        console.log("Setting loading to false");
        setLoading(false);
      }
    };

    fetchUserParcels();
  }, [user]);

  if (loading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error:", error);
    return <div>Error: {error}</div>;
  }

  function handleDetailsClick(parcel) {
    console.log("View details clicked for parcel:", parcel);
    setSelectedParcel(parcel);
  }

  const closeModal = () => {
    setSelectedParcel(null);
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
              <p>{`Location: ${parcel.fromLocation}`}</p>
            </div>
            <button
              className="details-button"
              onClick={() => handleDetailsClick(parcel)}
            >
              View Details
            </button>
          </div>
        ))}
        {selectedParcel && (
          <Modal parcel={selectedParcel} closeModal={closeModal} />
        )}
      </main>
    </div>
  );
}
