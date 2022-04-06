import React from "react";

function TicketUpcoming({ issue, level }) {
  return (
    <div className="upcoming-container">
      <div>
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
