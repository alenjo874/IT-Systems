import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ItemDetail({
  name,
  serial_number,
  rent,
  cpu,
  memory,
  graphic_card,
  tickets = [],
}) {
  // <th>Case Number</th>
  // <th>Complete</th>
  // <th>Case Date</th>
  // <th>Subject</th>
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

  return (
    <div className="item-detail-container">
      <div className="item-details">
        <p className="item-detail-head">Item Details</p>
        <table className="item-detail-table">
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
        <p className="item-detail-head">Owner Details</p>
        <table className="contact-table">
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

      <Link to="/inventory">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
