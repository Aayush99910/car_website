import React from "react";
import "./inventory.css";

export default function Inventory() {
  return (
    <div className="inventory">
      <div className="title-container">
        <h1>Our Inventory</h1>
      </div> 
      <div className="photos-container">
        <div className="photo-container">
          <img src="https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
          <p>Ford Mustang</p>
        </div>
        <div className="photo-container">
          <img src="https://images.unsplash.com/photo-1633359064754-804ba55e733f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
          <p>2013 Hyundai Accent</p>
        </div>
        <div className="photo-container">
          <img src="https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"></img>
          <p>Bmw i3</p>
        </div>
      </div>
    </div>
  )
}