"use client";

import React, { Component } from "react";
import LinkButton from "./LinkButton";
import "./Navbar.css";

interface NavbarProps {
  links: { label: string; to: string }[];
  className?: string;
}

class Navbar extends Component<NavbarProps> {
  static defaultProps = {
    className: "default-navbar",
  };

  render() {
    const { links, className } = this.props;
    return (
      <nav className={className}>
        {links.map((link, index) => (
          <LinkButton key={index} to={link.to} className="default-navbar-link-btn">
            {link.label}
          </LinkButton>
        ))}
      </nav>
    );
  }
}

export default Navbar;