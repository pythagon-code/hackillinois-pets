import React, { Component } from "react";
import "../styles/MapContainer.css";

class MapContainer extends Component {
  render() {
    return <div className="map-container">{this.props.children}</div>;
  }
}

export default MapContainer;