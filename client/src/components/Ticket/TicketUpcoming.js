import React from "react";

function TicketUpcoming({ id, issue, level,handleMoreDetail }) {
  return (
    <div className="upcoming-container">
      <div onClick={(e) => handleMoreDetail(id)}>
        <p> {issue}</p>

        <p
          className={
            level === "Low" ? "green" : level === "Moderate" ? "yellow" : "red"
          }
        >
          {level}
        </p>
      </div>
    </div>
  );
}

export default TicketUpcoming;
