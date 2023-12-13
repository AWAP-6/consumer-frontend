import React from "react";
import "../styles/Modal.css";

const Modal = ({ parcel, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{`Parcel ID: ${parcel.parcelId}`}</h2>
        <div className="info-container">
          <div className="info-column">
            <h3>Senders info:</h3>
            <p>{`Location: ${parcel.fromLocation}`}</p>
            <p>{`Name: ${parcel.senderName}`}</p>
            <p>{`Address: ${parcel.senderAddress}`}</p>
          </div>
          <div className="info-column">
            <h3>Recipient info:</h3>
            <p>{`Delivery Location: ${parcel.toLocation}`}</p>
            <p>{`Name: ${parcel.recipientName}`}</p>
            <p>{`Address: ${parcel.recipientAddress}`}</p>
            <p>Locker Number: 77</p>
            <p>Locker Open Code: 5824</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
