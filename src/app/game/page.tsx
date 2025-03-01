"use client";

import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import MapContainer from "@/components/MapContainer";

class Home extends Component {
  render() {
    return <>
      <Navbar />
      <MapContainer />
    </>;
  }
}

export default Home;