import React from "react";
import { v4 as uuidv4 } from "uuid";

function InventoryPage({ inventoryArray }) {
  const displayInventory = inventoryArray.map((item) => {
    return (
      <tr key={uuidv4()}>
        <td>{item.serial_number}</td>
        <td>{item.name}</td>
        <td> {item.rent ? "Not Available" : "Available"}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Product</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>{displayInventory}</tbody>
      </table>
    </div>
  );
}

export default InventoryPage;
