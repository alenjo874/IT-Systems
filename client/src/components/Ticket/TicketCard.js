import React from "react";

function TicketCard({ id, subject, level, issue, handleMoreDetail }) {
  return (
    <div className="ticket-card" onClick={(e) => handleMoreDetail(id)}>
      <div className="ticket-head">
        <p>{subject}</p>
        <p
          className={
            level === "Low" ? "green" : level === "Moderate" ? "yellow" : "red"
          }
        >
          {level}
        </p>
      </div>
      {/* <div>
        <p>{issue}</p>
      </div> */}
    </div>
  );
}

export default TicketCard;
