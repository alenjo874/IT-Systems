import React from "react";

function TicketDetails({
  subject,
  issue,
  create_date,
  level,
  employee,
  rental_item,
  complete
}) {
  return (
    <div className="ticket-details card">
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Number</p>
            <p> {employee ? employee.name : null} </p>
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
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Date</p>
            <p> {create_date} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Case Status</p>
            <p> {!complete ? "New" : null} </p>
          </div>
        </div>
      </div>

      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Subject</p>
          <p> {subject} </p>
        </div>
      </div>
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Case Issue</p>
          <p> {issue} </p>
        </div>
      </div>
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Product</p>
          <p> {rental_item ? rental_item.name : null} </p>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
