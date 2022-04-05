import React from "react";
import { Link } from "react-router-dom";

function ItemDetail({ name, serial_number, rent, cpu, memory, graphic_card }) {
  return (
    <div>
      <div className="item-details">
        <p>Item Details</p>
        <p>{name}</p>
        <p>{serial_number}</p>
        <p>{rent}</p>
        <p>{cpu}</p>
        <p>{memory}</p>
        <p>{graphic_card}</p>
        <table>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Serial Number</td>
            <td>{serial_number}</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td> {rent ? "Not Available" : "Available"}</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>{cpu}</td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>{memory}</td>
          </tr>
          <tr>
            <td>Graphic Card</td>
            <td>{graphic_card}</td>
          </tr>
        </table>
      </div>
      <Link to="/inventory">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
