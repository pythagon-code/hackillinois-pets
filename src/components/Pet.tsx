"use client";

import React, { Component } from "react";

interface PetProps {
  name: string;
  image: string;
  className?: string;
}

class Pet extends Component<PetProps> {
  static defaultProps = {
    className: "default-pet",
  };

  render() {
    const { name, image, className } = this.props;
    return (
      <div className={className}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    );
  }
}

export default Pet;
