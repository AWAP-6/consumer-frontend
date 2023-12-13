import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/NewPacket.css";
import Header from "./Header.js";
import { createParcel } from "../fetch/parcelFetch.js";

const SendPacket = () => {
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [toLocation, setToLocation] = useState(1);
  const [fromLocation, setFromLocation] = useState(1);

  const navigate = useNavigate();

  const handlePacketCreation = async (event) => {
    event.preventDefault();

    const packetData = {
      recipientName,
      recipientEmail,
      recipientAddress,
      senderName,
      senderEmail,
      senderAddress,
      toLocation,
      fromLocation,
    };

    console.log(packetData);

    try {
      const response = await createParcel(packetData);
      if (response.status === 200) {
        if (response.data && response.data.message) {
          alert(response.data.message);
        }
        navigate("/packetstatus");
      } else {
        if (response.data && response.data.message) {
          alert(response.data.message);
        } else {
        }
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <div className="newpacket-container">
        <div className="top-container">
          <h2 className="font-bold">Send packet:</h2>
          <Link to="/packetstatus">
            <button className="back-to-status">Back to packet status?</button>
          </Link>
        </div>
        <form className="form-styles" onSubmit={handlePacketCreation}>
          <h2>Packet:</h2>
          <div className="input-styles">
            <label>Width: </label>
            <input type="text" className="input-field" />
          </div>
          <div className="input-styles">
            <label>Height: </label>
            <input type="text" className="input-field" />
          </div>
          <div className="input-styles">
            <label>Depth: </label>
            <input type="text" className="input-field" />
          </div>
          <div className="input-styles">
            <label>Mass: </label>
            <input type="text" className="input-field" />
          </div>

          <h2>Recipient:</h2>
          <div className="input-styles">
            <label>Name: </label>
            <input
              type="text"
              value={recipientName}
              name="recipientName"
              onChange={(e) => setRecipientName(e.target.value)}
              required
            />
          </div>
          <div className="input-styles">
            <label>Email: </label>
            <input
              type="text"
              value={recipientEmail}
              name="recipientEmail"
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-styles">
            <label>Address: </label>
            <input
              type="text"
              value={recipientAddress}
              name="recipientAddress"
              onChange={(e) => setRecipientAddress(e.target.value)}
              required
            />
          </div>

          <h2>Choose Delivery Location:</h2>
          <div className="input-styles">
            <select
              value={toLocation}
              name="toLocation"
              onChange={(e) => setFromLocation(Number(e.target.value))}
              required
            >
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
              <option value={4}>Location 4</option>
              <option value={5}>Location 5</option>
            </select>
          </div>

          <h2>Sender:</h2>
          <div className="input-styles">
            <label>Name: </label>
            <input
              type="text"
              value={senderName}
              name="senderName"
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>
          <div className="input-styles">
            <label>Email: </label>
            <input
              type="text"
              value={senderEmail}
              name="senderEmail"
              onChange={(e) => setSenderEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-styles">
            <label>Address: </label>
            <input
              type="text"
              value={senderAddress}
              name="senderAddress"
              onChange={(e) => setSenderAddress(e.target.value)}
              required
            />
          </div>

          <h2>Choose Your Location:</h2>
          <div className="input-styles">
            <select
              value={fromLocation}
              name="fromLocation"
              onChange={(e) => setToLocation(Number(e.target.value))}
              required
            >
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
              <option value={4}>Location 4</option>
              <option value={5}>Location 5</option>
            </select>
          </div>

          <button type="submit" className="enter-button">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendPacket;
