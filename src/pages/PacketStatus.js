import React from "react";
import "../styles/PacketStatus.css";
import Header from "./Header.js";

function PackageCard({ title, description }) {
  return (
    <div>
      <Header />
      <div className="package-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <main className="flex-container">
      <h2>Packet Status and History:</h2>
      <div className="text-center">
        <PackageCard
          title="PackageNum 1"
          description="This is the status text for the first package"
        />
      </div>
      <div className="text-center">
        <PackageCard
          title="PackageNum 2"
          description="This is the status text for the second package"
        />
      </div>
      <div className="text-center">
        <PackageCard
          title="PackageNum 3"
          description="This is the status text for the third package"
        />
      </div>
      <div className="text-center">
        <PackageCard
          title="PackageNum 4"
          description="This is the status text for the fourth package"
        />
      </div>
      <div className="text-center">
        <PackageCard
          title="PackageNum 5"
          description="This is the status text for the fifth package"
        />
      </div>
    </main>
  );
}
