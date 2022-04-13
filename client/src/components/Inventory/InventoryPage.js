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

  const downCaretSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="edit-svg"
    >
      <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
    </svg>
  );

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
          <th className="table-head">
            Serial Number
            {downCaretSvg}
          </th>
          <th className="table-head">Product {downCaretSvg}</th>
          <th className="table-head">Rent {downCaretSvg}</th>
          <th className="table-head">Details</th>
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
