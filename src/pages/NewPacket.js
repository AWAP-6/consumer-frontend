import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewPacket.css";
import Header from "./Header.js";

const SendPacket = () => (
  <div>
    <Header />
    <div className="newpacket-container">
      <div className="top-container">
        <h2 className="font-bold">Send packet:</h2>
        <Link to="/packetstatus">
          <button className="back-to-status">Back to packet status?</button>
        </Link>
      </div>
      <form className="form-styles">
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
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Email: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Address: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>PhoneNumber: </label>
          <input type="text" className="input-field" />
        </div>

        <h2>Sender:</h2>
        <div className="input-styles">
          <label>Name: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Email: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>Address: </label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-styles">
          <label>PhoneNumber: </label>
          <input type="text" className="input-field" />
        </div>

        <h2>Choose Location:</h2>
        <div className="input-styles">
          <select className="input-field">
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
            <option value="location4">Location 4</option>
            <option value="location5">Location 5</option>
          </select>
        </div>

        <Link to="/packetstatus">
          <button className="enter-button">Enter</button>
        </Link>
      </form>
    </div>
  </div>
);

export default SendPacket;
