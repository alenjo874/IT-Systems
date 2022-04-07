import React from "react";

function TicketUpcoming({ id, issue, level }) {
  return (
    <div className="upcoming-container">
      <div>
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Case Issue</p>
            <p> {issue} </p>
          </div>
        </div>
        <div className="ticket-subsections">
          <div>
            <p className="detail-label">Case Priority</p>
            <p
              className={
                level === "Low"
                  ? "green"
                  : level === "Moderate"
                  ? "yellow"
                  : "red"
              }
            >
              {level}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketUpcoming;
