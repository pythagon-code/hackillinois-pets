"use client";

import React, { Component } from "react";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    const links = [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ];

    return <Navbar links={links} />;
  }
}

export default Home;
