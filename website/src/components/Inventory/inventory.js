import React, { useState } from "react";
import InventoryCard from "./InventoryCard/inventoryCard";
import "./inventory.css";

export default function Inventory() {
  const [carsInventory, setCarsinventory] = useState([
    {
      imageSource: "https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      model: "Ford Mustang",
      price: "$9,000",
      miles: "152,000 miles",
      type: "Automatic",
      body_type: "Sport"
    },
    {
      imageSource: "https://images.unsplash.com/photo-1633359064754-804ba55e733f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      model: "2013 Hyundai Accent",
      price: "$7,500",
      miles: "135,000 miles",
      type: "Hybrid",
      body_type: "Hatchback"
    },
    {
      imageSource: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      model: "Bmw i3",
      price: "$8,000",
      miles: "160,000 miles",
      type: "Electric",
      body_type: "Sedan"
    },
  ])

  return (
    <div className="inventory">
      <div className="title-container">
        <h1>Our Inventory</h1>
      </div> 
      <div className="photos-container">
        {
          carsInventory.map(car => {
            return (
              <InventoryCard details={car}/>
            )
          })
        }
      </div>
    </div>
  )
}