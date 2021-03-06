import React from "react";

function TicketCard({
  id,
  subject,
  level,
  case_number,
  handleTicketDelete,
  employeeSide,
  complete,
}) {
  const svgTrash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="edit-svg trash-svg"
      onClick={(e) => handleTicketDelete(e, id)}
    >
      <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
    </svg>
  );

  const caseStatusEmployee = (
    <div>
      <p className="detail-label">Current Status</p>
      <p className={complete ? "green" : "red"}>
        {complete ? "Completed" : "Pending"}
      </p>
    </div>
  );

  const casePriority = (
    <div>
      <p className="detail-label">Case Priority</p>
      <p
        className={
          level === "Low" ? "green" : level === "Moderate" ? "yellow" : "red"
        }
      >
        {level}
      </p>
    </div>
  );

  return (
    <div className="ticket-card">
      <div className="ticket-head">
        <p>Case: {case_number}</p>
        {employeeSide ? null : svgTrash}
      </div>
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Subject</p>
            <p> {subject} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          {employeeSide ? caseStatusEmployee : casePriority}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
