import React from "react";

function TicketCard({
  id,
  subject,
  level,
  issue,
  handleMoreDetail,
  create_date,
  complete,
  case_number,
}) {
  return (
    <div className="ticket-card" onClick={(e) => handleMoreDetail(id)}>
      <div className="ticket-head">
        <p>{case_number}</p>
      </div>
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Subject</p>
            <p> {subject} </p>
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
    </div>
  );
}

export default TicketCard;
