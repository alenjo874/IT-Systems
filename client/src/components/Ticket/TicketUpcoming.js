import React from "react";

function TicketUpcoming({ case_number, subject, level, employee }) {
  return (
    <div className="upcoming-container">
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Number</p>
            <p> {case_number} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
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
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Subject</p>
          <p> {subject} </p>
        </div>
      </div>
    </div>
  );
}

export default TicketUpcoming;
