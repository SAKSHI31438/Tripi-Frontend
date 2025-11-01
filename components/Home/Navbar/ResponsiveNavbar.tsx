"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleCloseNav = () => {
    setShowNav(false);
  };
  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNavbar showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNavbar;
