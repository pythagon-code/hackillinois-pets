"use client"

import React from 'react';
import HealthBar from './HealthBar';

interface PetProps {
  x: number;
  y: number;
  width: number;
  height: number;
  imageUrl: string;
}

const Pet: React.FC<PetProps> = ({ x, y, width, height, imageUrl }) => {
  return (
    <>
    <HealthBar
        x={x}
        y={y}
        width={100 /** ?? */}
        height={5} // Set a fixed height for the health bar
        health={100}
      />
    <div
      className="pet"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        position: 'absolute',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
      }}
    />
    </>
  );
};

export default Pet;
