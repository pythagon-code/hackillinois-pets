import React, { Component } from "react";
import "../styles/MapContainer.css";

class MapContainer extends Component {
  pets: { id: string; x: number; y: number; velocityX: number; velocityY: number; imageUrl: string }[] = [
    { id: 'pet1', x: 50, y: 50, velocityX: 2, velocityY: 1, imageUrl: "./images/pet.svg" },
    { id: 'pet2', x: 100, y: 100, velocityX: -1, velocityY: -2, imageUrl: "./images/pet.svg" }
  ];

  componentDidMount() {
    this.startMovement();
  }

  startMovement = () => {
    setInterval(this.movePets, 1000 / 60); // Move every 1/60th of a second (60 FPS)
  };

  movePets = () => {
    // Update pets' position without re-rendering
    this.pets.forEach(pet => {
      pet.x += pet.velocityX;
      pet.y += pet.velocityY;
    });

    // Trigger a re-render manually (if needed)
    this.forceUpdate();  // This is the key to manually re-render the component
  };

  render() {
    return (
      <div className="map-container">
        {this.pets.map(pet => (
          <img
            key={pet.id}
            src={pet.imageUrl}
            alt="pet"
            style={{
              position: 'absolute',
              left: `${pet.x}px`,
              top: `${pet.y}px`,
              width: '50px', // Size of the pet image
              height: '50px',
            }}
          />
        ))}
      </div>
    );
  }
}

export default MapContainer;
