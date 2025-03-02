"use client";

import React from 'react';

interface HealthBarProps {
  x: number;
  y: number;
  maxHealth: number;
  currHealth: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ x, y, maxHealth, currHealth }) => {
  const healthPercentage = (currHealth / maxHealth) * 100;

  return (
    <div
      className="health-bar"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '100px', // You can adjust this as necessary
        height: '10px', // Adjust for desired thickness
        backgroundColor: 'gray',
        borderRadius: '5px',
      }}
    >
      <div
        style={{
          width: `${healthPercentage}%`,
          height: '100%',
          backgroundColor: 'green',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default HealthBar;