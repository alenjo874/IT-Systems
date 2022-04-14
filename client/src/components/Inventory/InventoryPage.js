import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemDetail from "./ItemDetail";

function InventoryPage({ inventoryArray, setInventoryArray, employeeArray }) {
  const [moreDetailItem, setMoreDetailItem] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [itemOwner, setItemOwner] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [searchSerial, setSearchSerial] = useState("");
  const [searchItem, setSearchItem] = useState("");

  function handleMoreDetails(id) {
    const selectedInventoryItem = inventoryArray.find((item) => item.id === id);
    const relatedOwner = employeeArray.find(
      (employee) => employee.id === selectedInventoryItem.rentals[0].employee_id
    );
    setItemOwner(relatedOwner);
    setMoreDetailItem(selectedInventoryItem);
    setShowDetails(true);
  }

  const downCaretSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="edit-svg down-caret"
    >
      <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
    </svg>
  );

  function handleSerialSearch(e) {
    e.preventDefault();
    const searchSerialArray = inventoryArray.filter((item) =>
       item.serial_number.toString().includes(searchSerial.toString())
    );
    console.log(searchSerialArray);
  }

  const displayInventory = inventoryArray.map((item) => {
    return (
      <tr key={uuidv4()}>
        <td>{item.serial_number}</td>
        <td>{item.name}</td>
        <td> {item.rent ? "Not Available" : "Available"}</td>
        <td onClick={() => handleMoreDetails(item.id)} className="more-detail">
          More Detail
        </td>
      </tr>
    );
  });

  const displayInventoryTable = (
    <div>
      <div className="inventory-filter-container">
        <h4>All Items</h4>
        <span
          className="filter-caret"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <p>Show Filters </p>
          {downCaretSvg}
        </span>
      </div>
      {showFilter ? (
        <div className="filter-form">
          <form>
            <span className="filter-elem">
              <label>Serial Number:</label>
              <input
                value={searchSerial}
                onChange={(e) => setSearchSerial(e.target.value)}
              ></input>
              <button onClick={handleSerialSearch}></button>
              <select>
                <option value="none">select</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
                <option value="oldest">oldest</option>
                <option value="newest">newest</option>
              </select>
            </span>
            <span className="filter-elem">
              <label>Product:</label>
              <input
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              ></input>
              <button></button>
              <select>
                <option value="none">select</option>
                <option value="asc">a-z</option>
              </select>
            </span>
          </form>
        </div>
      ) : null}
      <table className="inventory-table admin-tables">
        <thead>
          <tr>
            <th className="table-head">Serial Number</th>
            <th className="table-head">Product</th>
            <th className="table-head">Rent</th>
            <th className="table-head">Details</th>
          </tr>
        </thead>
        <tbody>{displayInventory}</tbody>
      </table>
    </div>
  );

  return (
    <div className="inventory-page-container">
      <div className="tables-container">
        {showDetails ? (
          <ItemDetail
            {...moreDetailItem}
            itemOwner={itemOwner}
            inventoryArray={inventoryArray}
            setInventoryArray={setInventoryArray}
            setMoreDetailItem={setMoreDetailItem}
            setItemOwner={setItemOwner}
            setShowDetails={setShowDetails}
          />
        ) : (
          displayInventoryTable
        )}
      </div>
    </div>
  );
}

export default InventoryPage;
