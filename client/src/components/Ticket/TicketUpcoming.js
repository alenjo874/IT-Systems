import React from "react";

function TicketUpcoming({ issue, level }) {
  return (
    <div className="upcoming-container">
      <p> {issue}</p>

      <p
        className={
          level === "Low" ? "green" : level === "Moderate" ? "yellow" : "red"
        }
      >
        {level}
      </p>
    </div>
  );
}

export default TicketUpcoming;
