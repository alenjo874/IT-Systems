import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { v4 as uuidv4 } from "uuid";

function ItemDetail({
  id,
  name,
  serial_number,
  rent,
  cpu,
  memory,
  graphic_card,
  tickets = [],
  setInventoryArray,
  inventoryArray,
  setMoreDetailItem,
  setShowDetails,
}) {
  const [editItem, setEditItem] = useState(false);
  const [itemName, setItemName] = useState(name);
  const [itemCpu, setItemCpu] = useState(cpu);
  const [itemMemory, setItemMemory] = useState(memory);
  const [itemGraphicCard, setItemGraphicCard] = useState(graphic_card);

  const displyInventoryTickets = tickets.map((ticket) => {
    return (
      <tr key={uuidv4()}>
        <td>{ticket.case_number}</td>
        <td>{ticket.subject}</td>
        <td>{ticket.complete ? "Complete" : "Incomplete"}</td>
        <td>{ticket.create_date}</td>
      </tr>
    );
  });

  function handleEditItem(e) {
    e.preventDefault();
    setEditItem((prev) => !prev);
  }

  function handleSubmitChange(e) {
    e.preventDefault();
    const newItemObj = {
      name: itemName,
      cpu: itemCpu,
      memory: itemMemory,
      graphic_card: itemGraphicCard,
    };

    fetch(`inventories/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...newItemObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(setMoreDetailItem);

    const updatedItemArray = inventoryArray.map((item) => {
      if (item.id === id) {
        return { ...item, ...newItemObj };
      } else {
        return item;
      }
    });

    setInventoryArray(updatedItemArray);
    setEditItem(false);
  }

  const editInventoryItem = (
    <div className="update-pro-popup">
      <motion.div
        className="submit-confirm"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.25,
            type: "show",
            ease: "easeIn",
          },
        }}
        exit={{
          y: "10%",
          opacity: 0,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <div className="cancel-container">
          {/* <button onClick={handleTicketDetailEdit}>Cancel</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            onClick={handleEditItem}
            className="x-svg"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <form className="edit-item-form">
          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setItemName(e.target.value)}
              value={itemName}
            />
            <label className="form__label edit-placeholder">Name</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setItemCpu(e.target.value)}
              value={itemCpu}
            />
            <label className="form__label edit-placeholder">CPU</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setItemMemory(e.target.value)}
              value={itemMemory}
            />
            <label className="form__label edit-placeholder">Memory</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setItemGraphicCard(e.target.value)}
              value={itemGraphicCard}
            />
            <label className="form__label edit-placeholder">Graphic Card</label>
          </div>
        </form>
        <div className="edit-btns">
          <button onClick={handleSubmitChange}>Submit Changes</button>
        </div>
      </motion.div>
    </div>
  );

  const backArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      className="back-svg"
    >
      <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
    </svg>
  );

  const editPencilIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="edit-svg"
    >
      <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
    </svg>
  );

  return (
    <div className="item-detail-container">
      <div className="item-details">
        <div className="item-detail-head">
          <div
            className="icon-action-container"
            onClick={() => setShowDetails(false)}
          >
            {backArrowIcon}
            <p>Item Details</p>
          </div>
          <div className="icon-action-container" onClick={handleEditItem}>
            <p>Edit</p>
            {editPencilIcon}
          </div>
        </div>
        <table className="item-detail-table">
          <tbody>
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
          </tbody>
        </table>
        <p className="item-detail-head">Owner Details</p>
        <table className="contact-table">
          <tbody>
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
          </tbody>
        </table>
        <p className="item-detail-head">Incident History</p>
        <table className="incident-table">
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Subject</th>
              <th>Complete</th>
              <th>Case Date</th>
            </tr>
          </thead>
          <tbody>{displyInventoryTickets}</tbody>
        </table>
      </div>
      <AnimatePresence>{editItem ? editInventoryItem : null}</AnimatePresence>
    </div>
  );
}

export default ItemDetail;
