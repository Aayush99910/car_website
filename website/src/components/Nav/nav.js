import React from "react";
import "./nav.css"


export default function Nav() {
  return (
    <nav className="header">
      <div className="logo-container">
        <p>VIN MBYL</p>
      </div>
      <div className="navigation-container">
        <div>Home</div>
        <div>Vehicles</div>
        <div>Blog</div>
        <div>Contacts</div>
      </div>
      <div className="language-preference-container">
        <div>English</div>
      </div>
    </nav>
  )
}