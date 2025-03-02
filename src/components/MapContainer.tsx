import React, { Component } from "react";
import Pet from "./Pet"; // Import the updated Pet component
import "../styles/MapContainer.css"; // Import the CSS file for MapContainer

interface PetData {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  imageUrl: string;
  xVel: number;  // Horizontal velocity
  yVel: number;  // Vertical velocity
  health: number; // Health percentage
}

class MapContainer extends Component {
  pets: { [key: number]: PetData } = {};

  containerRef: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: any) {
    super(props);
    this.pets = {
      1: { id: 1, x: 50, y: 50, width: 50, height: 50, imageUrl: "/images/pet.svg", xVel: 1, yVel: 1, health: 100 },
      2: { id: 2, x: 100, y: 100, width: 50, height: 50, imageUrl: "/images/pet.svg", xVel: -1, yVel: -1, health: 50 },
    };
  }

  // Helper function to get the actual container dimensions
  getContainerDimensions() {
    if (this.containerRef.current) {
      const containerRect = this.containerRef.current.getBoundingClientRect();
      return {
        width: containerRect.width,
        height: containerRect.height,
      };
    }
    return { width: 0, height: 0 }; // Default values if the container is not available
  }

  movePet(id: number) {
    const pet = this.pets[id];
    if (!pet) return;

    const { width: containerWidth, height: containerHeight } = this.getContainerDimensions();

    // Move pet according to velocity
    pet.x += pet.xVel;
    pet.y += pet.yVel;

    // Boundary check for x position
    if (pet.x < 0) pet.x = 0;
    if (pet.x + pet.width > containerWidth) pet.x = containerWidth - pet.width;

    // Boundary check for y position
    if (pet.y < 0) pet.y = 0;
    if (pet.y + pet.height > containerHeight) pet.y = containerHeight - pet.height;

    // Update the pet's position in the dictionary
    this.setState({});
  }

  componentDidMount() {
    // Set up movement logic (e.g., move every frame or after some interval)
    setInterval(() => {
      // Move each pet in the dictionary
      for (let id in this.pets) {
        this.movePet(Number(id));
      }
    }, 16); // ~60 FPS
  }

  render() {
    return (
      <div className="map-container" ref={this.containerRef}>
        {Object.values(this.pets).map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            x={pet.x}
            y={pet.y}
            width={pet.width}
            height={pet.height}
            imageUrl={pet.imageUrl}
            health={pet.health} // Pass the health to the Pet component
          />
        ))}
      </div>
    );
  }
}

export default MapContainer;
