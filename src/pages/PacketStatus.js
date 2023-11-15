// TODO!

import React from "react";
import "../styles/PacketStatus.css";

function PackageCard({ title, description }) {
  return (
    <div className="package-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Packages() {
  return (
    <main className="flex-container">
      <div className="max-width-container">
        <div className="fixed-bottom-left"></div>
      </div>

      <div className="text-center">
        <PackageCard
          title="PackageNum 1"
          description="This is the status text for the first package"
        />
        <PackageCard
          title="PackageNum 2"
          description="This is the status text for the second package"
        />
        <PackageCard
          title="PackageNum 3"
          description="This is the status text for the third package"
        />
        <PackageCard
          title="PackageNum 4"
          description="This is the status text for the fourth package"
        />
        <PackageCard
          title="PackageNum 5"
          description="This is the status text for the fifth package"
        />
      </div>
    </main>
  );
}
