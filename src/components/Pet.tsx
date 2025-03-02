"use client"

import React from 'react';

interface PetProps {
  x: number;
  y: number;
  width: number;
  height: number;
  imageUrl: string;
}

const Pet: React.FC<PetProps> = ({ x, y, width, height, imageUrl }) => {
  return (
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
  );
};

export default Pet;
