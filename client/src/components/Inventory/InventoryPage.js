import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemDetail from "./ItemDetail";

function InventoryPage({ inventoryArray, setInventoryArray }) {
  const [moreDetailItem, setMoreDetailItem] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  function handleMoreDetails(id) {
    const selectedInventoryItem = inventoryArray.find((item) => item.id === id);
    setMoreDetailItem(selectedInventoryItem);
    setShowDetails(true);
  }

  const displayInventory = inventoryArray.map((item) => {
    return (
      <tr key={uuidv4()}>
        <td>{item.serial_number}</td>
        <td>{item.name}</td>
        <td> {item.rent ? "Not Available" : "Available"}</td>
        <td onClick={() => handleMoreDetails(item.id)} className="more-detail">
          {/* <Link to="/inventory_item">More Detail</Link> */}
          More Detail
        </td>
      </tr>
    );
  });

  const displayInventoryTable = (
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
  );

  return (
    <div className="inventory-page-container">
      {showDetails ? (
        <ItemDetail
          {...moreDetailItem}
          inventoryArray={inventoryArray}
          setInventoryArray={setInventoryArray}
          setMoreDetailItem={setMoreDetailItem}
          setShowDetails={setShowDetails}
        />
      ) : (
        displayInventoryTable
      )}
    </div>
  );
}

export default InventoryPage;
