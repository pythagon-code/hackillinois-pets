import React from "react";
import "../styles/HealthBar.css"; // Import the CSS file for the HealthBar

interface HealthBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  health: number; // Health value between 0 and 100
}

const HealthBar: React.FC<HealthBarProps> = ({ x, y, width, height, health }) => {
  // Calculate the width of the health bar based on the health percentage
  const healthWidth = (width * health) / 100;

  return (
    <div
      className="health-bar-container"
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y - 10}px`, // Place it just above the pet
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "5px",
      }}
    >
      <div
        className="health-bar"
        style={{
          width: `${healthWidth}px`,
          height: "100%", // Ensure the health bar takes up the full height of the container
          backgroundColor: "green", // Color of the health bar
          borderRadius: "5px 0 0 5px", // Rounded left side of the health bar
        }}
      />
    </div>
  );
};

export default HealthBar;
