import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { v4 as uuidv4 } from "uuid";
import TicketDetails from "../Ticket/TicketDetails";

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
  itemOwner,
  setItemOwner,
}) {
  const [editItem, setEditItem] = useState(false);
  const [itemName, setItemName] = useState(name);
  const [itemCpu, setItemCpu] = useState(cpu);
  const [itemMemory, setItemMemory] = useState(memory);
  const [itemGraphicCard, setItemGraphicCard] = useState(graphic_card);
  const [showEditOwner, setShowEditOwner] = useState(false);
  const [ownerName, setOwnerName] = useState(itemOwner.name);
  const [ownerDept, setOwnerDept] = useState(itemOwner.department);
  const [ownerPos, setOwnerPos] = useState(itemOwner.position);
  const [ownerEmail, setOwnerEmail] = useState(itemOwner.email);
  const [ownerExt, setOwnerExt] = useState(itemOwner.extension);
  const [showIncident, setShowIncident] = useState(false);
  const [relatedIncident, setRelatedIncident] = useState({});

  function handleShowIncident(ticketId) {
    const incidentObj = tickets.find((ticket) => ticket.id === ticketId);

    setRelatedIncident(incidentObj);

    setShowIncident(true);
  }

  const displyInventoryTickets = tickets.map((ticket) => {
    return (
      <tr key={uuidv4()}>
        <td onClick={() => handleShowIncident(ticket.id)}>
          {ticket.case_number}
        </td>
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

  function handleEditOwner(e) {
    e.preventDefault();
    setShowEditOwner((prev) => !prev);
  }

  function handleEditOwnerSubmit(e) {
    e.preventDefault();
    const editOwnerObj = {
      name: ownerName,
      department: ownerDept,
      position: ownerPos,
      email: ownerEmail,
      extension: ownerExt,
    };
    fetch(`employees/${itemOwner.id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...editOwnerObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(setItemOwner);

    setShowEditOwner(false);
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

  const editItemOwner = (
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
            onClick={handleEditOwner}
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
              onChange={(e) => setOwnerName(e.target.value)}
              value={ownerName}
            />
            <label className="form__label edit-placeholder">Owner Name</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setOwnerDept(e.target.value)}
              value={ownerDept}
            />
            <label className="form__label edit-placeholder">Department</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setOwnerPos(e.target.value)}
              value={ownerPos}
            />
            <label className="form__label edit-placeholder">Position</label>
          </div>

          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setOwnerEmail(e.target.value)}
              value={ownerEmail}
            />
            <label className="form__label edit-placeholder">Email</label>
          </div>
          <div className="form">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              onChange={(e) => setOwnerExt(e.target.value)}
              value={ownerExt}
            />
            <label className="form__label edit-placeholder">Extension</label>
          </div>
        </form>
        <div className="edit-btns">
          <button onClick={handleEditOwnerSubmit}>Submit Changes</button>
        </div>
      </motion.div>
    </div>
  );

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

  const ticketIncident = (
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
            onClick={() => setShowIncident(false)}
            className="x-svg"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <TicketDetails {...relatedIncident} />
    
      </motion.div>
    </div>
  );

  return (
    <div className="item-detail-container">
      <div className="inventory-filter-container">
        <span className="filter-caret" onClick={() => setShowDetails(false)}>
          {backArrowIcon}
          <p>Back</p>
        </span>
      </div>
      <div className="item-details admin-tables">
        <div className="item-detail-head">
          <p>Item Details</p>

          <div className="icon-action-container" onClick={handleEditItem}>
            <p>Edit</p>
            {editPencilIcon}
          </div>
        </div>
        <table className="item-detail-table ">
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
        <div className="item-detail-head">
          <p>Current Owner</p>

          <div className="icon-action-container" onClick={handleEditOwner}>
            <p>Edit</p>
            {editPencilIcon}
          </div>
        </div>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{itemOwner.name}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>{itemOwner.department}</td>
            </tr>
            <tr>
              <td>Position</td>
              <td> {itemOwner.position}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{itemOwner.email}</td>
            </tr>
            <tr>
              <td>Extension</td>
              <td>{itemOwner.extension}</td>
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
      <AnimatePresence>{showEditOwner ? editItemOwner : null}</AnimatePresence>
      <AnimatePresence>{showIncident ? ticketIncident : null}</AnimatePresence>
    </div>
  );
}

export default ItemDetail;
