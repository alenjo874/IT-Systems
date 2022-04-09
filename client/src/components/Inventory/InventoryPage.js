import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function InventoryPage({ inventoryArray, handleMoreDetails, setInventoryArray }) {

  const displayInventory = inventoryArray.map((item) => {
    return (
      <tr key={uuidv4()}>
        <td>{item.serial_number}</td>
        <td>{item.name}</td>
        <td> {item.rent ? "Not Available" : "Available"}</td>
        <td onClick={(e) => handleMoreDetails(item.id)}>
          <Link to="/inventory_item">More Detail</Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="inventory-page-container">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Product</th>
            <th>Rent</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{displayInventory}</tbody>
      </table>
    </div>
  );
}

export default InventoryPage;
