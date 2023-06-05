import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { FaRoad } from "react-icons/fa";

export default function InventoryCard(props) {
  return (
    <div className="photo-container">
      <img src={props.details.imageSource}></img>
      <div className="details-container">
        <div className="name-price-contatiner">
          <p className="model">{props.details.model}</p>
          <p className="price">{props.details.price}</p>
        </div>
        <div className="miles-type-container">
          <p className="body-type"><BsFillCarFrontFill />{props.details.body_type}</p>
          <p className="type"><GrSettingsOption />{props.details.type}</p>
          <p className="miles"><FaRoad />{props.details.miles}</p>
        </div>
      </div>
    </div>
  )
}